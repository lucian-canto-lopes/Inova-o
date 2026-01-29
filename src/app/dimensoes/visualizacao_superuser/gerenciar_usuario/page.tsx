"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPlus, FaPen, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

type Usuario = {
  id: number;
  nome_usuario: string;
  email_institucional: string;
  tipo_de_usuario: "USUARIO" | "ADMIN";
  telefone: string | null;
  createdAt: string;
  updatedAt: string;
};

type FormData = {
  nome_usuario: string;
  email_institucional: string;
  senha: string;
  tipo_de_usuario: "USUARIO" | "ADMIN";
  telefone: string;
};

const initialFormData: FormData = {
  nome_usuario: "",
  email_institucional: "",
  senha: "",
  tipo_de_usuario: "USUARIO",
  telefone: "",
};

export default function GerenciarUsuarioPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  // Delete confirmation
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/usuarios");
      if (!response.ok) throw new Error("Erro ao carregar usuários");
      const data = await response.json();
      setUsuarios(data.usuarios);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setFormData(initialFormData);
    setModalMode("add");
    setEditingId(null);
    setShowModal(true);
    setError(null);
  };

  const openEditModal = (usuario: Usuario) => {
    setFormData({
      nome_usuario: usuario.nome_usuario,
      email_institucional: usuario.email_institucional,
      senha: "",
      tipo_de_usuario: usuario.tipo_de_usuario,
      telefone: usuario.telefone || "",
    });
    setModalMode("edit");
    setEditingId(usuario.id);
    setShowModal(true);
    setError(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData(initialFormData);
    setEditingId(null);
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const url = modalMode === "add" ? "/api/usuarios" : `/api/usuarios/${editingId}`;
      const method = modalMode === "add" ? "POST" : "PUT";

      const payload: Partial<FormData> = { ...formData };
      if (modalMode === "edit" && !formData.senha) {
        delete payload.senha;
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao salvar usuário");
      }

      setSuccess(modalMode === "add" ? "Usuário criado com sucesso!" : "Usuário atualizado com sucesso!");
      setTimeout(() => setSuccess(null), 3000);
      closeModal();
      fetchUsuarios();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/usuarios/${id}`, { method: "DELETE" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao excluir usuário");
      }

      setSuccess("Usuário excluído com sucesso!");
      setTimeout(() => setSuccess(null), 3000);
      setDeleteConfirm(null);
      fetchUsuarios();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E8E8E8]">
      {/* NavBar */}
      <nav className="bg-[#A3CE6F] h-20 flex items-center justify-between px-12 shrink-0">
        <Link href="/dimensoes/visualizacao_superuser">
          <FaArrowLeft className="w-10 h-10 text-white cursor-pointer hover:scale-110 transition" />
        </Link>
        <h1 className="text-[#2a5a0a] text-3xl font-bold">Gerenciar Usuários</h1>
        <Link href="/login" className="w-10 h-10 rounded-full overflow-hidden bg-white/70">
          <img src="/default-avatar-profile-icon.webp" alt="Perfil" className="w-full h-full object-cover" />
        </Link>
      </nav>

      {/* Conteúdo */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Alertas */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex justify-between items-center">
              <span>{error}</span>
              <button onClick={() => setError(null)}><FaTimes /></button>
            </div>
          )}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex justify-between items-center">
              <span>{success}</span>
              <button onClick={() => setSuccess(null)}><FaTimes /></button>
            </div>
          )}

          {/* Header com botão adicionar */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Lista de Usuários</h2>
            <button
              onClick={openAddModal}
              className="bg-[#4C7F16] hover:bg-[#3d6812] text-white px-4 py-2 rounded flex items-center gap-2 transition"
            >
              <FaPlus /> Adicionar Usuário
            </button>
          </div>

          {/* Tabela de usuários */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Carregando...</div>
            ) : usuarios.length === 0 ? (
              <div className="p-8 text-center text-gray-500">Nenhum usuário cadastrado</div>
            ) : (
              <table className="w-full">
                <thead className="bg-[#4C7F16] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Nome de Usuário</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Tipo</th>
                    <th className="px-4 py-3 text-left">Telefone</th>
                    <th className="px-4 py-3 text-left">Criado em</th>
                    <th className="px-4 py-3 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario, index) => (
                    <tr
                      key={usuario.id}
                      className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 text-black`}
                    >
                      <td className="px-4 py-3 font-medium text-black">{usuario.nome_usuario}</td>
                      <td className="px-4 py-3 text-black">{usuario.email_institucional}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            usuario.tipo_de_usuario === "ADMIN"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {usuario.tipo_de_usuario}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-black">{usuario.telefone || "-"}</td>
                      <td className="px-4 py-3 text-sm text-black">{formatDate(usuario.createdAt)}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => openEditModal(usuario)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded transition"
                            title="Editar"
                          >
                            <FaPen size={16} />
                          </button>
                          {deleteConfirm === usuario.id ? (
                            <div className="flex gap-1">
                              <button
                                onClick={() => handleDelete(usuario.id)}
                                className="p-2 text-green-600 hover:bg-green-100 rounded transition"
                                title="Confirmar"
                              >
                                <FaCheck size={16} />
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="p-2 text-gray-600 hover:bg-gray-100 rounded transition"
                                title="Cancelar"
                              >
                                <FaTimes size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(usuario.id)}
                              className="p-2 text-red-600 hover:bg-red-100 rounded transition"
                              title="Excluir"
                            >
                              <FaTrash size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="bg-[#4C7F16] text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {modalMode === "add" ? "Adicionar Usuário" : "Editar Usuário"}
              </h3>
              <button onClick={closeModal} className="hover:bg-white/20 p-1 rounded">
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome de Usuário *
                </label>
                <input
                  type="text"
                  name="nome_usuario"
                  value={formData.nome_usuario}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4C7F16] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Institucional *
                </label>
                <input
                  type="email"
                  name="email_institucional"
                  value={formData.email_institucional}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4C7F16] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha {modalMode === "add" ? "*" : "(deixe em branco para manter)"}
                </label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required={modalMode === "add"}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4C7F16] text-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de Usuário
                </label>
                <select
                  name="tipo_de_usuario"
                  value={formData.tipo_de_usuario}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4C7F16] text-black"
                >
                  <option value="USUARIO">Usuário</option>
                  <option value="ADMIN">Administrador</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4C7F16] text-black"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-[#4C7F16] hover:bg-[#3d6812] text-white px-4 py-2 rounded transition disabled:opacity-50"
                >
                  {submitting ? "Salvando..." : "Salvar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
