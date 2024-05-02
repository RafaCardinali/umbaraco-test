export const formFields = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'vat', type: 'text', placeholder: 'CPF', required: true },
    { name: 'ic', type: 'text', placeholder: 'RG', required: true },
    { name: 'birthDate', type: 'date', placeholder: 'Data de Nascimento', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', required: true },
    { name: 'phone', type: 'text', placeholder: 'Telefone', required: false },
    { name: 'address', type: 'text', placeholder: 'Endereço', required: true },
    { name: 'professionalRegistration', type: 'text', placeholder: 'Registro Pessoal (CFM)', required: true },
    { name: 'careRegion', type: 'text', placeholder: 'Região de Atendimento', required: true },
    { name: 'consultationValue', type: 'text', placeholder: 'Valor da consulta', required: true },
    { name: 'careOption', type: 'select', options: ['Presencial', 'Consulta Online'], placeholder: 'Opção de atendimento', required: true },
    { name: 'photo', type: 'file', placeholder: 'Foto do perfil', required: true }
];