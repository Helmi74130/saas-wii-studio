import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Wii Studio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Plateforme collaborative interne pour gérer vos contenus, projets et équipes
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/login">
            <Button variant="primary" size="lg">
              Se connecter
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" size="lg">
              Créer un compte
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Articles & Pages
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gérez vos contenus avec un système de révision et de publication
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Projets clients
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Suivez vos projets et assignez des tâches aux membres de l'équipe
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Collaboration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Partagez des fichiers et collaborez avec commentaires et mentions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
