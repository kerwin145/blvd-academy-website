import React from 'react'
import FacultySlide from '../components/FacultySlide'
import {Cheng, Cooper, Kowal, Coyle, Gonzalez, Lang, Lee, Sunjiayao } from '../facultyImages'
import background2 from '../images/background2.jpg'
import background3 from '../images/background3.jpg'



import './Faculty.css'

function Faculty() {

    const facultyData = [
        {
            "image": Cheng,
            "name": "Lihong Cheng (Principal)",
            "subject": "Mathematics",
            "textCn": "成丽虹于1987年赴美，从1990 起就在纽约市教育系统教数学, 1998 年转换到纽约州教育系统。编写过教材, 教学大纲和各年级数学课程的教案。他在过去的十几年里帮助了无数的学生实现了进长春滕校园深造的理想， 其学生遍布了所有排名前30的大学。他是长岛华夏中文学校前校长; 纽约大道学苑创办人。 他有丰富的教学和行政管理经验, 对现时的美国教育系统和理念有深刻的理解.",
            "textEn": "Mr. Cheng is a veteran educator of mathematics in NYC and NYS since 1990; former principal of Long Island School of Chinese and founder of BLVD Academy of New York. He has a wealth of knowledge and profound nderstanding of the current school system and the related issues. His students can be found in the top 30 universities and colleges in the United States. He always says that “In BLVD Academy, we always work to achieve the best results for our students. Practice does not automatically make perfect, Perfect practice makes Perfect.”",
        },
        {
            "image": Cooper,
            "name": "Mrs. Cooper",
            "subject": "English",
            "textCn": "",
            "textEn": "Ms. Cooper is an educator with the New York City Department of Education. She received her B.S. in Political Science at York College, Queens. She has a Graduate Degree in Public Administration from Baruch College CUNY, a Graduate Degree in Special Education from City College, CUNY and a Graduate degree in School Administration at Baruch, CUNY. Ms. Cooper also began Graduate degrees in Labor & Industrial Relations at Rutgers, New Brunswick, NJ and a Graduate Degree in Literacy Acquisition at City College, CUNY. She sits on PBS 13, Educational Services Advisory Board and the Board of Brooklyn Amity School. Ms. Cooper has completed fifteen years of service with the New York City Department of Education. Prior becoming an educator, Ms. Cooper was in the corporate world, being a consultant with Chase Manhattan Bank Wall Street and Beth Israel Medical Center. Ms. Cooper was also the 8th grade ELA teacher and co-wrote the personal essay, for student Harold Ekeh. Harold was recently in the news because of his historical acceptance to our top colleges and every Ivy League College in the United States.",
        },
        {
            "image": Kowal,
            "name": "Mr. Kowal",
            "subject": "English",
            "textCn": "",
            "textEn": "Mr. Kowal was New York City public school English teacher. In addition to teaching at BLVD Academy, Mr. Kowal is also an adjunct professor of remedial reading and writing at Queensborough Community College, as well as an adjunct professor of English composition at DeVry College in New York City.",
        },
        {
            "image": Coyle,
            "name": "Mr. Coyle",
            "subject": "Mathematics",
            "textCn": "",
            "textEn": "	Mr. R. Coyle received his Bachelor Degree of Mathematics at Long Island University, P. W. Post Campus. He did his student teaching in one of the High Schools on Long Island and a middle school in Bayside, New York, and school district 26. His passionate is teaching mathematics to little children so that they can be prepared to move on to take more challenging courses. Mr. Coyle loves to work with children and is very serious about his calling in teaching of mathematics. Regarding the model of BLVD Academy, he commented that “It is great to see children learning the methods and concepts through practice. Nothing beats the practice.",
        },
        {
            "image": Gonzalez,
            "name": "Rene C. Gonzalez",
            "subject":"English",
            "textCn": "",
            "textEn": "As a teacher and student for life, Christian Gonzalez’s passion and patience is reflected in his dedication to his students. After graduating from Queens College with a Bachelor of Arts in anthropology, he traveled abroad, where he found his calling as a teacher. He eventually returned to the states and obtained a Master of Arts from City College with a focus in culture and language. From international students to schools in New York City, to migrant workers at Belmont Racetrack, Christian has taught in a variety of programs and communities. In addition to being a welcome member of our teaching staff, he is an adjunct professor of English composition at the College of Staten Island.",
        },
        {
            "image": Lang,
            "name": "Jessica Lang",
            "subject": "English",
            "textCn": "",
            "textEn": "Mrs. Jessica Lang has a fantastic background. She started her teaching career in 2008 with a Master's Degree in Speech and Language from New York University. She currently teaches at Robert F. Kennedy Community High School in Flushing. She is a person with patience and well received by our students. She has truly been a unique addition to our teaching staff.",
        },
        {
            "image": Lee,
            "name": "Fernando Lee",
            "subject": "English",
            "textCn": "",
            "textEn": "	Fernando Lee has been a teacher since 1999. He taught in New York City's Education Department from 1999-2007, as a high school history teacher. Interested in other ventures, Mr. Lee decided to take a hiatus from teaching and moved to upstate New York for a change of scenery, in 2007. After living there for 2 years, Mr. Lee decided to return to New York City and pursue teaching again. Besides teaching at CCCF Institute, Mr. Lee also currently teaches English at Queens Community College. He has a Bachelor of Arts in United States History from Stony Brook University and a Master of Science in Education from College of Mount Saint Vincent.",
        },
        {
            "image": Sunjiayao,
            "name": "Jiayau Sun",
            "subject": "Mathematics",
            "textCn": "",
            "textEn": "Ms. Jiayao Sun graduated from Stony Brook University with a dual degree in mathematics and applied mathematics. While in the college, she worked along with a professor, completing a year-long research project on Big Data which achieved significant results. She also represented Stony Brook University at a professional conference in Arizona, where she presented her research. She was granted a place in graduate school at Stony Brook University in her senior year. Currently, she is working towards her graduate degree in statistics.",
        },

    ]
    return (
        <div className='faculty'>

            {/*
            <div className='faculty__background'>
                <img src={background3} alt="" />
            </div>  
            */}
            <div className='faculty__slides'>
                {facultyData.map((teacher, index) =>(<FacultySlide image = {teacher.image} name = {teacher.name} subject = {teacher.subject} textCn = {teacher.textCn} textEn ={teacher.textEn} />)
                )}
            </div>
        </div>
    )
}

export default Faculty 
