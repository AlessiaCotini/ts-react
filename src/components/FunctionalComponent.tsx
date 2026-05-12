import { useState } from "react";

interface FunctionalComponentProps {
  content: string;
}

const FunctionalComponent = function (props: FunctionalComponentProps) {
  const [name, setName] = useState("topo");
  //   const [obj, setObj] = useState<null | { count: number; pets: boolean }>(null);

  const handleClick = () => {
    // setObj({count: {2}; pets: true});
    setName("topolino");
  };

  return (
    <div className="text-center bg-warning p-3">
      <h3>Sono un componente a funzione</h3>
      <p>{props.content}</p>
      <p onClick={handleClick}>{name.toUpperCase()}</p>
    </div>
  );
};
export default FunctionalComponent;
