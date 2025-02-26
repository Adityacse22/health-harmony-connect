
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DiagnosisResultProps {
  diagnosis: string;
  onReset: () => void;
}

const DiagnosisResult = ({ diagnosis, onReset }: DiagnosisResultProps) => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Assessment Results</h2>
      <div className="prose prose-sm max-w-none mb-6">
        <div className="bg-secondary/10 rounded-lg p-4 mb-4">
          <p className="text-gray-600 whitespace-pre-line">{diagnosis}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            Remember: This is an AI-generated assessment and should not be considered as
            medical advice. Please consult with a healthcare professional for proper
            diagnosis and treatment.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={onReset}
          className="bg-primary hover:bg-primary-hover text-white"
        >
          Start New Assessment
        </Button>
      </div>
    </Card>
  );
};

export default DiagnosisResult;
