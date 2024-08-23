"use client";
import classes from "./page.module.css"
import Accordion from "@/components/Accordion/App";
import { useTranslation } from "next-i18next";
const Questions: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="answers" className={classes.questions}>
            <div className={classes.questions_content}>
                <h1 className={classes.questions_title}>
                    {t('questionstitle')}
                </h1>
                <p className={classes.questions_text}>
                    {t('questionsinfo')}{' '}
                    <a
                        href="https://t.me/usatuzb"
                        style={{ color: '#fff' }}
                    >
                        {t('suzquestions')}
                    </a>{' '}
                    {t('davomiquestions')}
                </p>
                <Accordion></Accordion>
            </div>
        </section>
    );
};

export default Questions;
