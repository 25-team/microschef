import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getGPTResponse } from "../api";

const RecipePage = () => {
  const { state } = useLocation();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGPTResponse(state.prompt);
        setResponse(data);
      } catch (error) {
        setResponse("Произошла ошибка. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [state.prompt]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <h1>Рецепты</h1>
      <p>{response}</p>
    </div>
  );
};

export default RecipePage;
