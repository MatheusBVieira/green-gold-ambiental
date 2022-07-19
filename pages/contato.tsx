import React, { useRef, useState } from 'react';
import Head from 'next/head'
import { transparentize } from 'polished'
import styled from "styled-components"
import Input from '../components/Input'
import TextSelect from '../components/TextSelect'
import TextArea from '../components/TextArea'
import emailjs, { init } from '@emailjs/browser';
import {verifyEmpty} from '../utils/validate';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag'

export async function sendEmailExternal(formCurrent: any, router: any) {
    emailjs.sendForm(String(process.env.SERVICE_ID), String(process.env.TEMPLATE_ID), formCurrent, process.env.USER_ID)
        .then((result) => {
            alert('Email enviado com sucesso! Você será redirecionado para Home.');
            router.push('/');
        }, (error) => {
            alert(error + 'Erro ao enviar email!');
        }
    );
}

export default function Contato(props: any) {
    init(String(process.env.USER_ID));

    const router = useRouter();

    const form: any = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
    const [area, setArea] = useState("");
    const [message, setMessage] = useState("");
    const [state, setState] = useState("");
    const [interest, setInterest] = useState("");
    const [selectInterestIsValid, setSelectInterestIsValid] = useState(true);
    const [selectStateIsValid, setSelectStateIsValid] = useState(true);

    function maskPhone(value: string) {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d)(\d{4})$/, '$1-$2')
    }
    
    const sendEmail = (e: any) => {
        e.preventDefault();
        
        var error = verifyEmpty(name, "name");
        error = verifyEmpty(email, "email");
        error = verifyEmpty(company, "company");
        error = verifyEmpty(phone, "phone");
        error = verifyEmpty(profession, "profession");
        error = verifyEmpty(area, "area");
        
        if (interest === "") {
            setSelectInterestIsValid(false);
            error = true;
        }
        
        if (state === "") {
            setSelectStateIsValid(false);
            error = true;
        }
        
        if (error) return;

        gtag.event({
            action: 'submit_form',
            category: 'Contact',
            label: message,
            value: null
        })
        
        sendEmailExternal(form.current, router);
    };
    
    let optionsState = [
        { value: 'SC', label: 'Santa Catarina' },
        { value: 'PR', label: 'Paraná' },
        { value: 'RS', label: 'Rio Grande do Sul' },
    ];

    const optionsInterest = [
        { value: 'Conhecendo', label: 'Estou apenas conhecendo' },
        { value: 'Estudando', label: 'Estou estudando para um projeto' },
        { value: 'Orcamento', label: 'Já conheço e quero fazer um orçamento' },
        { value: 'Sem interesse', label: 'Não tenho interesse' },
        { value: 'Comprar agora', label: 'Quero comprar agora' },
    ];

    return (
        <Wrapper>
            <Head>
                <title>Green Gold Ambiental - Contato</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/iconTab.png" />
            </Head>

            <Content>
                <Title>Faça seu orçamento!</Title>
                <FormWrapper id='form' ref={form} onSubmit={sendEmail}>
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        type={"text"}
                        name={"name"}
                        placeholder={"Digite seu nome completo"}
                        text={"Nome"}
                    />
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        type={"email"}
                        name={"email"}
                        placeholder={"Digite seu e-mail"}
                        text={"Email"}
                    />
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
                        type={"text"}
                        name={"company"}
                        placeholder={"Digite o nome da sua empresa"}
                        text={"Empresa"}
                    />
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                        type={"text"}
                        name={"phone"}
                        maxLength={15}
                        value={maskPhone(phone)}
                        placeholder={"(YY) XXXXX-XXXX"}
                        text={"Telefone"}
                    />
                    <TextSelect
                        isValid={selectStateIsValid}
                        onChange={(e: any) => setState(e.value)}
                        options={optionsState}
                        name={"stateSelect"}
                        text={"Estado"}
                    />
                    <TextSelect
                        isValid={selectInterestIsValid}
                        onChange={(e: any) => setInterest(e.value)}
                        options={optionsInterest}
                        name={"interestSelect"}
                        text={"Qual o seu interesse?"}
                    />
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfession(e.target.value)}
                        type={"text"}
                        name={"profession"}
                        placeholder={"Digite sua profissão"}
                        text={"Qual a sua profissão"}
                    />
                    <Input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArea(e.target.value)}
                        type={"text"}
                        name={"area"}
                        placeholder={"Digite o tamanho da área em metros"}
                        text={"Tamanho da área para hidrossemeadura (m2)"}
                    />
                    <TextArea
                        onChange={(e: any) => setMessage(e.target.value)}
                        text={"Quer falar conosco? Mande uma mensagem!"}
                        placeholder='Digite sua mensagem...'
                    />
                    <input
                        value={message}
                        name={"message"}
                        type={"hidden"}
                    />
                    <input
                        value={state}
                        name={"state"}
                        type={"hidden"}
                    />
                    <input
                        value={interest}
                        name={"interest"}
                        type={"hidden"}
                    />
                    <Button>Enviar informações</Button>
                </FormWrapper>
            </Content>

        </Wrapper>
    )
}

const Wrapper = styled.main`
  
`

const Title = styled.h1`
    margin-bottom: 76px;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: ${p => p.theme.attentionForeground};

    @media only screen and (max-width: 900px) {
        font-weight: 600;
        font-size: 22px;
        line-height: 21px;

        margin-bottom: 40px;
    }
`

const Content = styled.div`
    min-height: 100vh;

    margin-top: 192px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 500px) {
        margin-top: 100px;
    }
`

const FormWrapper = styled.form`
    width: 54%;
    padding-top: 80px;
    margin-bottom: 150px;
    background-color: ${p => transparentize(0.2 , p.theme.primaryBackground)};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    border-radius: 10px;

    @media only screen and (max-width: 1300px) {
        width: 70%;
    }

    @media only screen and (max-width: 900px) {
        width: calc(100% - 32px);
    }

    @media only screen and (max-width: 500px) {
        gap: 14px;
        padding-top: 38px;
    }
`

const Button = styled.button`
    padding: 28px 68px;
    margin-top: 40px;
    margin-bottom: 80px;

    background-color: ${p => p.theme.attentionForeground};
    color: ${p => p.theme.primaryForeground};

    font-weight: 500;
    font-size: 22px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    
    border-radius: 10px;

    @media only screen and (max-width: 500px) {
        padding: 12px 32px;
        margin-top: 26px;
        margin-bottom: 32px;

        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        border-radius: 5px;
    }
`