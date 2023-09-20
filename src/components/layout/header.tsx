import { Layout, Avatar, Dropdown, Modal } from "antd";
import itsaFanLogo from "../../assets/images/itsaFan-logo-textRed-transparent-01.png";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import AuthContext from "../../context/auth-context";
import { useContext, useState } from "react";
import Login from "../forms/auth-form/login";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

type Props = {
  className?: string;
};

export default function PageHeader({ className }: Props) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);
  function handleLogout() {
    logout();
    navigate("/");
  }
  const openModal = () => {
    setShowModal(true);
  };

  const exitModal = () => {
    setShowModal(false);
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
      label: <a onClick={handleLogout}>Logout</a>,
    },
  ];
  return (
    <Header className={className}>
      <img src={itsaFanLogo} alt="logo" width={120} height={30} />
      {currentUser.username ? (
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Avatar size="large" icon={<UserOutlined />} className="bg-slate-50" />
        </Dropdown>
      ) : (
        <div onClick={openModal}>
          <Avatar size="large" icon={<UserOutlined />} className="bg-slate-50" />
        </div>
      )}

      <Modal centered open={showModal} onCancel={exitModal} footer={null} width={300} bodyStyle={{ margin: "10px 0 0 0" }}>
        <Login />
      </Modal>
    </Header>
  );
}
