
import React from 'react';
import { Page } from '../types';
import Icon from './common/Icon';
import { icons } from 'lucide-react';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  pages: Page[];
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  appTitle?: string;
  appLogo?: string;
}

const pageIcons: { [key in Page]: keyof typeof icons } = {
    'Dashboard': 'LayoutDashboard',
    'Inventário de Equipamentos': 'Computer',
    'Controle de Licenças': 'ScrollText',
    'Usuários e Permissões': 'Users',
    'Configurações': 'Settings',
    'Auditoria': 'History',
}
const developerPhoto = "data:image/jpeg;base64,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";
const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, pages, isSidebarOpen, setIsSidebarOpen, appTitle, appLogo }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={`fixed lg:static inset-y-0 left-0 z-30 bg-white dark:bg-dark-card shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col
          ${isSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0 lg:w-20'}
        `}
      >
        {/* Header da Sidebar */}
        <div className="h-20 flex items-center justify-center border-b dark:border-dark-border relative">
             {isSidebarOpen ? (
                <div className="flex items-center gap-2 px-4">
                    {appLogo ? (
                      <img src={appLogo} alt="Logo" className="w-8 h-8 object-contain" />
                    ) : (
                      <Icon name="ShieldCheck" size={32} className="text-brand-primary" />
                    )}
                    <h1 className="text-xl font-bold text-brand-dark dark:text-dark-text-primary whitespace-nowrap truncate">{appTitle || 'Inventário Pro'}</h1>
                </div>
            ) : (
                 appLogo ? (
                  <img src={appLogo} alt="Logo" className="w-8 h-8 object-contain" />
                 ) : (
                  <Icon name="ShieldCheck" size={32} className="text-brand-primary" />
                 )
            )}
            
            {/* Botão para fechar no mobile */}
             <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 lg:hidden text-gray-500"
            >
                <Icon name="X" size={24} />
            </button>
        </div>

        {/* Lista de Navegação */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {pages.map((page) => {
                // Verifica se a página atual está na lista de páginas permitidas (segurança visual)
                if (!pages.includes(page)) return null;
                
                const isActive = activePage === page;
                return (
                  <li key={page}>
                    <button
                      onClick={() => {
                        setActivePage(page);
                        // Fecha sidebar no mobile ao clicar
                        if (window.innerWidth < 1024) setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200
                        ${isActive 
                          ? 'bg-brand-primary text-white shadow-md' 
                          : 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700'
                        }
                        ${!isSidebarOpen ? 'justify-center' : ''}
                      `}
                      title={!isSidebarOpen ? page : ''}
                    >
                      <Icon name={pageIcons[page]} size={24} />
                      {isSidebarOpen && (
                        <span className="ml-3 font-medium text-sm">{page}</span>
                      )}
                    </button>
                  </li>
                );
            })}
          </ul>
        </nav>

        {/* Rodapé com Info do Desenvolvedor */}
        <div className="border-t dark:border-dark-border p-4 bg-gray-50 dark:bg-dark-bg/50">
            <div className={`flex items-center gap-3 ${!isSidebarOpen ? 'justify-center' : ''}`}>
                <div className="relative group">
                    {/* Foto com efeito de Zoom */}
                    <img
                        src={developerPhoto}
                        alt="Dev"
                        className={`
                            w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-dark-border bg-gray-200
                            transition-transform duration-300 ease-out origin-bottom-left
                            hover:scale-[5] hover:z-50 hover:shadow-2xl cursor-pointer relative
                        `}
                    />
                </div>
                
                {isSidebarOpen && (
                    <div className="flex-1 min-w-0 overflow-hidden">
                        <p className="text-xs font-bold text-brand-secondary dark:text-dark-text-primary truncate" title="marcelo.reis@usereserva.com">
                            marcelo.reis@usereserva.com
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-dark-text-secondary truncate">
                            &copy; 2025 Dev: Marcelo Reis
                        </p>
                    </div>
                )}
            </div>
             {!isSidebarOpen && (
                <div className="mt-2 text-center">
                     <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-400 hover:text-brand-primary transition-colors"
                     >
                        <Icon name="ChevronsRight" size={20} />
                     </button>
                </div>
            )}
        </div>
        
         {isSidebarOpen && (
             <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white dark:bg-dark-border border border-gray-200 dark:border-gray-600 rounded-full p-1 shadow-md hidden lg:block text-gray-500 hover:text-brand-primary"
            >
                <Icon name="ChevronLeft" size={16} />
            </button>
         )}
      </div>
    </>
  );
};

export default Sidebar;
