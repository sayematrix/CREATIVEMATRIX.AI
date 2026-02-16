
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini with API key from environment, strictly following SDK requirements
// Always use process.env.API_KEY directly in the named parameter object.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativePrompt = async (theme: string): Promise<string> => {
  try {
    // Use ai.models.generateContent as per the new SDK structure
    // Model 'gemini-3-flash-preview' is used for basic text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a high-detail, artistic AI image prompt for a creative software (like Midjourney or DALL-E) based on this theme: "${theme}". 
      Make it professional, cinematic, and use descriptive artistic terminology. Return only the prompt string.`,
    });
    // Use .text property (not a method) to extract output as per latest guidelines
    return response.text || "Failed to generate prompt. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to the Matrix. Check your connection.";
  }
};

export const generateWorkflow = async (goal: string): Promise<string> => {
  try {
    // Use ai.models.generateContent as per the new SDK structure
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a concise 5-step content creation workflow for a modern creator aiming for: "${goal}". 
      Focus on efficiency and AI tool integration. Keep it punchy and actionable. Use bullet points.`,
    });
    // Use .text property (not a method) to extract output
    return response.text || "Failed to generate workflow. Matrix busy.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error syncronizing with the Matrix Hub.";
  }
};
