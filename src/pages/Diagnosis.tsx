
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DiagnosisForm from "@/components/diagnosis/DiagnosisForm";
import DiagnosisResult from "@/components/diagnosis/DiagnosisResult";
import { useToast } from "@/components/ui/use-toast";

const Diagnosis = () => {
  const [step, setStep] = useState<number>(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [diagnosis, setDiagnosis] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const questions = [
    {
      id: "symptoms",
      question: "What symptoms are you experiencing? Please describe them in detail.",
    },
    {
      id: "duration",
      question: "How long have you been experiencing these symptoms?",
    },
    {
      id: "severity",
      question: "On a scale of 1-10, how severe are your symptoms?",
    },
    {
      id: "history",
      question: "Do you have any relevant medical history or ongoing conditions?",
    },
  ];

  const handleResponse = async (response: string) => {
    const updatedResponses = {
      ...responses,
      [questions[step].id]: response,
    };
    setResponses(updatedResponses);

    if (step === questions.length - 1) {
      // Final step - generate diagnosis
      setIsLoading(true);
      try {
        const result = await generateDiagnosis(updatedResponses);
        setDiagnosis(result);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate diagnosis. Please try again.",
        });
      }
      setIsLoading(false);
    } else {
      setStep(step + 1);
    }
  };

  const resetDiagnosis = () => {
    setStep(0);
    setResponses({});
    setDiagnosis("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Disclaimer */}
        <Card className="p-6 mb-8 border-primary/20 bg-white/80 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-primary mb-2">Important Disclaimer</h2>
          <p className="text-gray-600">
            This AI-powered diagnosis tool is for informational purposes only and should not be considered
            as a substitute for professional medical advice. Always consult with a qualified healthcare
            provider for proper diagnosis and treatment.
          </p>
        </Card>

        {diagnosis ? (
          <DiagnosisResult diagnosis={diagnosis} onReset={resetDiagnosis} />
        ) : (
          <DiagnosisForm
            question={questions[step].question}
            onSubmit={handleResponse}
            isLoading={isLoading}
            questionNumber={step + 1}
            totalQuestions={questions.length}
          />
        )}
      </div>
    </div>
  );
};

const generateDiagnosis = async (responses: Record<string, string>): Promise<string> => {
  try {
    const response = await fetch("/api/diagnosis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ responses }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate diagnosis");
    }

    const data = await response.json();
    return data.diagnosis;
  } catch (error) {
    console.error("Error generating diagnosis:", error);
    throw error;
  }
};

export default Diagnosis;
