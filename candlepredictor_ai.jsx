// Folder: client/
// React + Tailwind Frontend for Candle Predictor AI

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);

    const res = await fetch('https://your-backend-api-url/predict', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setPrediction(data.prediction);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="space-y-4">
          <h1 className="text-xl font-bold text-center">Candle Predictor AI</h1>
          <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <Button onClick={handleSubmit}>Predict</Button>
          {prediction && <p className="text-center">Prediction: <b>{prediction}</b></p>}
        </CardContent>
      </Card>
    </div>
  );
}
