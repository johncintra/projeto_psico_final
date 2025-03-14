import { HeartBoldIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Feedback from './feedback';
import { Link } from '@/navigation';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className='text-center justify-center mt-10'>
        <h1 className={title()}>About</h1>
      </div>
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
        <p>
        Bem-vindo ao AprovaPM, seu principal destino para explorar
        traços de personalidade usando o modelo Big Five cientificamente aclamado.
        Nosso teste gratuito oferece insights detalhados sobre as cinco principais
        dimensões da personalidade: Abertura, Conscienciosidade, Extroversão,
        Agradabilidade e Neuroticismo
                </p>
        <br />
        <p>
        Cada dimensão é cuidadosamente analisada para fornecer uma visão abrangente
        de suas características e como elas influenciam seu comportamento e interações.
        </p>
        <p>
        Desenvolvido com precisão e acessibilidade em mente, nosso teste ajuda você
        a se entender melhor e a promover o crescimento pessoal. Abrace essa
        jornada de autodescoberta, onde insights psicológicos
        encontram tecnologia amigável.
        </p>
        <br />
        {/*<p>
          If you have questions please read through the{' '}
          <Link href='/faq' className='underline'>
            FAQ
          </Link>{' '}
          first. If you can&apos;t find an answer there, feel free to contact us
          at bigfive-test@rubynor.com.
        </p>*/}
      </div>
      <section>
        <div className='text-center justify-center mt-20'>
          <h2 className={title()}>Adoramos feedback!&nbsp;</h2>
          <div className='flex md:inline-flex flex-col md:flex-row items-center'>
            <HeartBoldIcon
              className='text-pink-500 animate-heartbeat'
              size={50}
              style={{
                animationDuration: '2.5s'
              }}
            />
          </div>
          <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
          Envie-nos feedback sobre como nossos recursos podem ser melhorados ou problemas
          específicos.
          </div>
        </div>
        <Feedback />
      </section>
    </>
  );
}
