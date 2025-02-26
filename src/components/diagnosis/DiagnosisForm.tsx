
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface DiagnosisFormProps {
  question: string;
  onSubmit: (response: string) => void;
  isLoading: boolean;
  questionNumber: number;
  totalQuestions: number;
}

const DiagnosisForm = ({
  question,
  onSubmit,
  isLoading,
  questionNumber,
  totalQuestions,
}: DiagnosisFormProps) => {
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      onSubmit(response.trim());
      setResponse("");
    }
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm">
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">
          Question {questionNumber} of {totalQuestions}
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{question}</h2>
        <form onSubmit={handleSubmit}>
          <Textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your answer here..."
            className="mb-4"
            rows={4}
            required
          />
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white"
            disabled={isLoading || !response.trim()}
          >
            {isLoading ? "Processing..." : "Next"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default DiagnosisForm;
