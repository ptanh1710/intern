import React from 'react';
import classNames from 'classnames/bind';
import { CardList, CardListVertical } from '../../../components/Card';

import style from './Newspaper.module.scss';
import NewImage1 from '../../../assets/news1.jpg';
import NewImage2 from '../../../assets/news2.jpg';
import NewImage3 from '../../../assets/news3.jpg';

const cx = classNames.bind(style);

const newspapers = [
    {
        title: 'New Paper 1',
        description:
            'a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proina scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin',
        image: NewImage1,
    },
    {
        title: 'New Paper 2',
        description:
            'a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin',
        image: NewImage2,
    },
    {
        title: 'New Paper 3',
        description:
            'a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin',
        image: NewImage3,
    },
];

function Newspaper() {
    return (
        <section>
            <CardList>
                {newspapers.map((newspaper, index) => (
                    <CardListVertical
                        key={index}
                        ziczac
                        title={newspaper.title}
                        image={newspaper.image}
                        description={newspaper.description}
                    />
                ))}
            </CardList>
        </section>
    );
}

export default Newspaper;
