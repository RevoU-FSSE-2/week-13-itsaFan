import { Layout, Avatar, Dropdown, Modal } from "antd";
import itsaFanLogo from "../../assets/images/itsaFan-logo-textRed-transparent-01.png";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import { useState } from "react";
import Registration from "../forms/auth-form/registration";

const { Header } = Layout;

type Props = {
  className?: string;
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="" rel="" href="">
        Setting
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="k" rel="noopener noreferrer" href="">
        Account
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="" href="">
        Logout
      </a>
    ),
  },
];

export default function PageHeader({ className }: Props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const exitModal = () => {
    setShowModal(false);
  };
  return (
    <Header className={className}>
      <img src={itsaFanLogo} alt="logo" width={120} height={30} />
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <Avatar size="large" icon={<UserOutlined />} className="bg-slate-50" />
      </Dropdown>

      <div onClick={openModal}>
        <Avatar size="large" icon={<UserOutlined />} className="bg-slate-50" />
      </div>

      <Modal centered width={645} open={showModal} onCancel={exitModal} footer={null}>
        <Registration />
      </Modal>
    </Header>
  );
}
