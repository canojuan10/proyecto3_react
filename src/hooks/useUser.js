import { useEffect, useState } from "react";
import { getUserByIdService } from "../services";

export const useUser = (idUser) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getUserByIdService(idUser);
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [idUser]);

  return { userData, error, loading, setError };
};
