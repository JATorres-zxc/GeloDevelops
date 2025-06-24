import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Progress } from './ui/progress';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

interface LiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    liveUrl?: string;
    imageUrl?: string;
  } | null;
}

const DISCLAIMER =
  'This project is hosted on a free tier (e.g., Render/Vercel). There may be a short delay or cold start when opening the demo. If you encounter an issue, please contact the developer.';

const CONTACT_BODY = (projectName: string) =>
  `Hi, I was trying to check out the "${projectName}" demo and encountered an issue. Just wanted to let you know!`;

const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ isOpen, onClose, project }) => {
  const [timer, setTimer] = useState(10);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimer(10);
      setCheckboxChecked(false);
      setTimerDone(false);
      return;
    }
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimerDone(true);
    }
  }, [isOpen, timer]);

  if (!project) return null;

  const handleContinue = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  const handleContact = () => {
    const user = 'gelodevelops';
    const domain = 'gmail.com';
    const email = `${user}@${domain}`;
    const subject = `Issue with Project Demo - ${project.name}`;
    const body = CONTACT_BODY(project.name);
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground mb-2 text-center">
              {project.name}
            </DialogTitle>
          </DialogHeader>
          {project.imageUrl && (
            <div className="mb-4 rounded-lg overflow-hidden w-full flex justify-center">
              <img
                src={project.imageUrl}
                alt={`${project.name} preview`}
                className="w-full max-h-48 object-cover"
              />
            </div>
          )}
          <div className="w-full mb-4">
            <div className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 rounded-md px-4 py-3 text-sm text-center">
              {DISCLAIMER}
            </div>
          </div>
          <Button
            variant="outline"
            className="mb-4 w-full"
            onClick={handleContact}
            type="button"
          >
            Contact Developer
          </Button>
          <div className="w-full mb-2">
            <Progress value={((10 - timer) / 10) * 100} />
            <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">
              {timer > 0 ? `Please wait ${timer} second${timer !== 1 ? 's' : ''}...` : 'You may now continue.'}
            </div>
          </div>
          <div className="flex items-center gap-2 w-full mb-4">
            <Checkbox
              id="understand-delay"
              disabled={!timerDone}
              checked={checkboxChecked}
              onCheckedChange={(checked) => setCheckboxChecked(!!checked)}
            />
            <label
              htmlFor="understand-delay"
              className={`text-sm select-none ${!timerDone ? 'text-gray-400 dark:text-gray-600' : 'text-gray-700 dark:text-gray-200'}`}
            >
              I understand the potential delay and agree to continue.
            </label>
          </div>
          <Button
            className="w-full"
            onClick={handleContinue}
            disabled={!checkboxChecked}
            type="button"
          >
            Continue to Live Demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveDemoModal; 