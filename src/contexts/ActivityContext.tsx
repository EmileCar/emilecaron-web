import React, { createContext, useEffect, useState } from 'react';
import emileCaronImage from '../assets/img/emilecaron_picture.jpg';
import emileCaronPiano from '../assets/img/emilecaron_piano.jpg';
import { useTranslation } from 'react-i18next';
import PianoIcon from '../components/custom_icons/pianoIcon';
import WebDevIcon from '../components/custom_icons/webDevIcon';
import { ReactNode } from 'react';

export const ActivityContext = createContext({
    toggleActivity: () => {},
    id: '',
    img: null as string | null,
    icon: null as React.FC | null,
    title: '',
    description: '',
    buttons: [] as any[],
    activityState: ''
});


interface ActivityProviderProps {
    children: ReactNode;
}

export const ActivityProvider: React.FC<ActivityProviderProps> = ({ children }) => {
    const { t } = useTranslation("global");

    const webDevData = {
        id: 'webDev',
        img: emileCaronImage,
        icon: WebDevIcon,
        title: "hero.webDev.title",
        description: "hero.webDev.description",
        buttons: [
            {
                text: "hero.webDev.buttons.cv",
                type: "primary",
                action: {
                    type: "download",
                    link: "/assets/files/CV_Emile_Caron.pdf"
                }
            },
            {
                text: "hero.webDev.buttons.contact",
                type: "secondary",
                link: "/contact"
            }
        ]
    };

    const pianoData = {
        id: 'piano',
        img: emileCaronPiano,
        icon: PianoIcon,
        title: "hero.pianist.title",
        description:"hero.pianist.description",
        buttons: [
            {
                text: "hero.pianist.buttons.contact",
                link: "/contact",
                type: "primary",

            }
        ]
    };

    const [activity, setActivity] = useState(webDevData);

    const [img, setImg] = useState<string | null>(null);
    const [icon, setIcon] = useState<React.FC | null>(null);
    const [title, setTitle] = useState<string>('Emile Caron');
    const [description, setDescription] = useState<string>('');
    const [buttons, setButtons] = useState<any[]>([]);
    const [activityState, setActivityState] = useState("fadeIn");

    useEffect(() => {
        if(activityState === "fadeOut"){
            setTimeout(() => {
                setImg(activity.img);
                setIcon(activity.icon);
                setTitle(t(activity.title));
                // replace $$AGE$$ with age
                const description = t(activity.description);
                const age = new Date().getFullYear() - 2002;
                const ageRegex = /\$\$AGE\$\$/g;
                setDescription(description.replace(ageRegex, age.toString()));
                const buttons = activity.buttons.map(button => {
                    return {
                        text: t(button.text),
                        type: button.type,
                        action: button.action,
                        link: button.link
                    }
                });
                setButtons(buttons);
                setActivityState("fadeIn");
            } , 510);
        }
    }, [activityState]);

    useEffect(() => {
        setImg(activity.img);
        setIcon(activity.icon);
        setTitle(t(activity.title));
        // replace $$AGE$$ with age
        const description = t(activity.description);
        const age = new Date().getFullYear() - 2002;
        const ageRegex = /\$\$AGE\$\$/g;
        setDescription(description.replace(ageRegex, age.toString()));
        const buttons = activity.buttons.map(button => {
            return {
                text: t(button.text),
                type: button.type,
                action: button.action,
                link: button.link
            }
        });
        setButtons(buttons);
    }, [t]);

    const toggleActivity = () => {
        if (activity.id === webDevData.id) {
            setActivity(pianoData);
            setActivityState("fadeOut");
        } else {
            setActivity(webDevData);
            setActivityState("fadeOut");
        }
    }

    return (
        <ActivityContext.Provider value={{ toggleActivity, id: activity.id, img, icon, title, description, buttons, activityState }}>
            {children}
        </ActivityContext.Provider>
    );
};
