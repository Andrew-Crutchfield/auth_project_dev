import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  let navigate = useNavigate();

  const goToHomePage = () => navigate('/home');

  const replaceWithHomePage = () => navigate('/home', { replace: true });

  const goBack = () => navigate(-1);

  const goForward = () => navigate(1);

  // Explicitly typing path as string and state as any (consider using a more specific type if possible)
  const navigateToPathWithState = (path: string, state: any) => navigate(path, { state });

  return { 
    goToHomePage, 
    replaceWithHomePage, 
    goBack, 
    goForward, 
    navigateToPathWithState 
  };
};