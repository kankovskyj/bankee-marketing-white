import React from 'react';
import { UnderlineText } from '@/components/ui/Underline';

export default function HowItWorks() {
    const HowItWorksMap = [
        {
            stepNo: 1,
            hasArrow: false,
            title: (
              <span>
                Jednoduše, přehledně a <UnderlineText strokeColor="#26274b" className="font-bold">rychle</UnderlineText>
              </span>
            ),
            description: <p>Pohodlná a bezplatná online registrace. Díky procesu schvalování a minimálnímu počtu požadovaných dokumentů žádost vyplníte za pár minut.</p>
        },
        {
            stepNo: 2,
            hasArrow: false,
            title: (
              <span>
                <UnderlineText strokeColor="#26274b" className="font-bold">Bezpečnost</UnderlineText> uživatele vždy na prvním místě
              </span>
            ),
            description: <p>bankee je garantem pro obě strany úvěrového procesu. Garantujeme, že smluvené financování nemovitosti je zajištěno vždy legálně a bez problémů.</p>
        },
        {
            stepNo: 3,
            hasArrow: false,
            title: (
              <span>
                <UnderlineText strokeColor="#26274b" className="font-bold">Transparentní</UnderlineText> podmínky a poplatky
              </span>
            ),
            description: <p>Transparentnost námi nabízených úvěrů pomáhá snížit riziko při jejich splácení. Dbáme na to, abychom veškeré informace poskytli co nejpodrobněji.</p>
        },
    ];

    return {
        HowItWorksMap
    }
}