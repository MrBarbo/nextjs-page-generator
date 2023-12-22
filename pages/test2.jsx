"use client";
import { useRouter } from "next/navigation";

const PrefabPage = () => {
  const router = useRouter();
  const { query } = router;

  // Acceder a los valores de la query de forma dinámica
  const inputValues =
    query && typeof query === "object"
      ? Object.keys(query).map((key) => ({
          inputName: key,
          value: query[key],
        }))
      : [];

  // Luego puedes utilizar inputValues como necesites
  // ...
  console.log("Input Values:", inputValues);
  return (
    <div>
      {/* Renderizar o trabajar con inputValues */}
    </div>
  );
};

export default PrefabPage;
