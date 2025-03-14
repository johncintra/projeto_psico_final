'use client';

import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal';
import { Link } from '@nextui-org/link';
import { useEffect, useState } from 'react';
import { SettingsIcon } from './icons';
import { CookieConsentSettings } from './cookie-consent-settings';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCookieConsentSettings, setShowCookieConsentSettings] =
    useState(false);

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem('cookie_consent');
    if (!storedCookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAllowCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  const handleSettings = () => {
    setShowBanner(false);
    setShowCookieConsentSettings(true);
  };

  return (
    <>
      <Modal
        isOpen={showBanner}
        placement='bottom'
        onOpenChange={setShowBanner}
        // isDismissable={false}
        // isKeyboardDismissDisabled
        hideCloseButton
        // backdrop='transparent'
      >
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>
            Consentimento de cookies
          </ModalHeader>
          <ModalBody>
            <p>Usamos cookies em nosso site.</p>
            <p>
            Leia mais em nossa <Link href='/privacy'>política de Privacidade</Link>.
            </p>
          </ModalBody>
          <ModalFooter className='justify-start'>
            <div className='grow'>
              <Button
                variant='flat'
                startContent={<SettingsIcon />}
                onPress={handleSettings}
              >
                Preferências
              </Button>
            </div>
            <Button
              color='danger'
              variant='light'
              onPress={handleDeclineCookies}
            >
              Rejeitar
            </Button>
            <Button color='primary' onPress={handleAllowCookies}>
              Aceitar tudo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <CookieConsentSettings
        showCookieConsentSettings={showCookieConsentSettings}
        setShowCookieConsentSettings={setShowCookieConsentSettings}
      />
    </>
  );
}
