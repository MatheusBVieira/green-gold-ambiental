import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import photos01 from '../public/images/photosPage/photos01.svg';
import photos02 from '../public/images/photosPage/photos02.svg';
import photos03 from '../public/images/photosPage/photos03.svg';
import photos04 from '../public/images/photosPage/photos04.svg';
import photos05 from '../public/images/photosPage/photos05.svg';
import photos06 from '../public/images/photosPage/photos06.svg';
import photos07 from '../public/images/photosPage/photos07.svg';
import photos08 from '../public/images/photosPage/photos08.svg';
import photos09 from '../public/images/photosPage/photos09.svg';
import photos10 from '../public/images/photosPage/photos10.svg';
import photos11 from '../public/images/photosPage/photos11.svg';
import photos12 from '../public/images/photosPage/photos12.svg';
import photos13 from '../public/images/photosPage/photos13.svg';
import photos14 from '../public/images/photosPage/photos14.svg';


export default function Home(props: any) {

  return (
    <Wrapper>
      <Head>
        <title>Green Gold Ambiental - Fotos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Title>Fotos do nosso trabalho</Title>
        <ImagesContent>
          <Images>
            <div style={{ width: 482, height: 643}}>
              <Image src={photos01} alt="Imagem hidrossemeadura"/>
            </div>
            <div style={{ width: 482, height: 362 }}>
              <Image src={photos03} alt="Imagem hidrossemeadura"/>
            </div>
            <div style={{ width: 482, height: 969 }}>
              <Image src={photos05} alt="Imagem hidrossemeadura"/>
            </div>
          </Images>
          <Images>
            <div style={{ width: 600, height: 444 }}>
              <Image src={photos02} alt="Imagem hidrossemeadura" />
            </div>
            <div style={{ width: 600, height: 731, }}>
              <Image src={photos04} alt="Imagem hidrossemeadura" />
            </div>
            <div style={{ width: 600, height: 807, }}>
              <Image src={photos06} alt="Imagem hidrossemeadura" />
            </div>
          </Images>
        </ImagesContent>
        <div style={{ marginTop: 16, marginBottom: 16  }}>
          <Image src={photos07} alt="Imagem hidrossemeadura" />
        </div>
        <ImagesContent>
          <Images>
            <div style={{ width: 482, height: 596 }}>
              <Image src={photos08} alt="Imagem hidrossemeadura" />
            </div>
            <div style={{ width: 482, height: 596 }}>
              <Image src={photos10} alt="Imagem hidrossemeadura" />
            </div>
            <div style={{ width: 482, height: 601 }}>
              <Image src={photos12} alt="Imagem hidrossemeadura" />
            </div>
          </Images>
          <Images>
            <div style={{ width: 600, height: 822 }}>
              <Image src={photos09} alt="Imagem hidrossemeadura" />
            </div>
            <div style={{ width: 600, height: 470}}>
              <Image src={photos11} alt="Imagem hidrossemeadura" />
            </div>
            <div style={{ width: 600, height: 487, }}>
              <Image src={photos13} alt="Imagem hidrossemeadura" />
            </div>
          </Images>
        </ImagesContent>
        <div style={{marginTop: 16}}>
          <Image src={photos14} alt="Imagem hidrossemeadura" />
        </div>
      </Content>
      
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display:flex;
`

const Content = styled.div`
  margin-top: 236px;
  margin-left: 170px;
  width: 1100px;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 96px;
  color: ${p => p.theme.attentionForeground};
`

const ImagesContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
