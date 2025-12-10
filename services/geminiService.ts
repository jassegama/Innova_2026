import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  try {
    const modelId = "gemini-2.5-flash";
    const systemInstruction = `
      You are an expert Interior Design Consultant for 'Innova Decorating', a high-end painting and decorating firm in Queenstown, New Zealand.
      
      Your goal is to provide sophisticated, practical, and aesthetic advice on color palettes, finishes, and wallpaper trends.
      Keep your answers concise (under 150 words), professional, and encouraging.
      If the user asks about specific technical services (plastering, airless spraying), explain them briefly and suggest they book a quote.
      
      Tone: Elegant, knowledgeable, helpful, friendly.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I'm sorry, I couldn't generate advice at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to our Design Assistant. Please try again later.";
  }
};