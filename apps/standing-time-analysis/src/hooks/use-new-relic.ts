export const useNewRelic = () => {
  const nr = (window as unknown as NewRelicWindow).newrelic;

  const addNewRelicAction = (
    name: string,
    attributes?: Record<string, string | number | boolean>
  ) => {
    nr.addPageAction(name, attributes);
  };

  const setNewRelicAttribute = (
    name: string,
    value: string | number | boolean
  ) => {
    nr.setCustomAttribute(name, value);
  };

  const setRouteName = (name: string) => {
    nr.setCurrentRouteName(name);
  };

  return { addNewRelicAction, setNewRelicAttribute, setRouteName };
};

interface NewRelicWindow extends Window {
  newrelic: {
    setCustomAttribute: (
      name: string,
      value: string | number | boolean
    ) => void;
    addPageAction: (
      name: string,
      attributes?: Record<string, string | number | boolean>
    ) => void;
    setCurrentRouteName: (name: string) => void;
  };
}
