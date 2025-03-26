// src/app/layout.tsx
import './styles.css';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <body>
        <main>
          {children} 
        </main>
      </body>
    </html>
  );
};

export default Layout;
