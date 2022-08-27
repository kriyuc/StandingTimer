import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useNewRelic } from "./use-new-relic";
import { useLocation } from "react-router-dom";

export const useInitNewRelicAttributes = () => {
  const { setNewRelicAttribute, addNewRelicAction, setRouteName } =
    useNewRelic();

  useEffect(() => {
    setNewRelicAttribute("appLoadId", uuidv4());
    addNewRelicAction("appLoad");
  }, [setNewRelicAttribute, addNewRelicAction]);

  const location = useLocation();

  useEffect(() => {
    setRouteName(location.pathname);
  }, [location, setRouteName]);
};
