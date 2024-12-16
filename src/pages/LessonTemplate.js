import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LessonComponent from '../components/Lesson/LessonComponent';
import { LESSONS } from '../data/lessons';

const LessonTemplate = () => {
    const { lessonId } = useParams();
    const lesson = LESSONS[lessonId];

    if (!lesson) {
        return <Navigate to="/wiki" replace />;
    }

    return <LessonComponent lesson={lesson} />;
};

export default LessonTemplate;
