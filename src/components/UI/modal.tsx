import { Button, Modal as AntModal } from "antd";
import { useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Modal(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const exitModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button onClick={openModal}  className="bg-green-600 hover:bg-opacity-80 mb-2">
        <p className="text-white">+ Add</p>
      </Button>
      <AntModal  width={320} bodyStyle={{ margin: "90px 0 0 0" }} centered  open={showModal} onCancel={exitModal} footer={null} className={props.className}>
        {props.children}
      </AntModal>
    </>
  );
}
