
export interface Lesson {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  content: string;
  learningObjective: string;
  corePrinciples: string[];
  actionBreakdown: string[];
}

export interface ToolResponse {
  result: string;
  type: 'prompt' | 'workflow';
}
