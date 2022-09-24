import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransaction() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransaction() {
    setIsNewTransactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
