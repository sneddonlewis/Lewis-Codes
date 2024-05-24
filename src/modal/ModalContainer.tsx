import {MutableRefObject, ReactNode, ReactPortal, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

const modalRoot = document.getElementById('modal');

function ModalContainer({ children }: { children: ReactNode}): ReactPortal {
  const elRef: MutableRefObject<HTMLDivElement | any> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () =>{
      modalRoot.removeChild(elRef.current)
    };
  }, []);

  return createPortal(
    <div>
      {children}
    </div>,
    elRef.current
  );
}

export default ModalContainer;
