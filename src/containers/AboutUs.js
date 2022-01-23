import React, {useState} from 'react'
import './AboutUs.css'

function AboutUs() {

    const [inChinese, setChinese] = useState(true);

    return (

        <div className='about-us'>
            
            <div className='about-us__text'>
                <span className='about-us__text-translate_panel'>
                    {inChinese ? 
                    <>
                        <button 
                            className = "cn-font-text about-us__text-translate--selected" onClick = {() => setChinese(true)}>
                                中文</button>
                        <button className = 'cn-font-text' onClick = {() => setChinese(false)}>English</button>
                    </>
                    :
                    <>
                    <button 
                    className = "cn-font-text" onClick = {() => setChinese(true)}>
                        中文</button>
                    <button className = 'cn-font-text about-us__text-translate--selected' onClick = {() => setChinese(false)}>English</button>
                    </>
                    }
               </span>      
                {inChinese ? 
                
                <div className = 'cn-font-text'>
                    <h3>大道學苑介绍</h3>
                    <div>
                        <p>
                            大道学苑(Boulevard Academy) 的宗旨是行大道走正路。培养、帮助在校学生提高、 加强基础知识的训练，打下扎实的文理功底，提高应试能力，为进入所期望的各类高等学府深造 创造条件。各类课程的设制就是围绕着这一目标。我们提供以下的课程:
                        </p>
                        <ol>
                            <li>
                            3年级至12年级的英语数学加强班。当今美国初等教育的一个特点是所教内容非常广泛, 但讲不深, 讲不透。我们课程在现存大纲的基础上进行加强和提高。英语课的内容包括: 
                                <p>(a)词汇 (b)语法 (c)阅读和 (d)写作四部分</p>
                                <p>数学课的内容包括: (a)在学校的基础上作加强和提高 (b) 美国少年数学竞赛 (Math Olympiad) (c) 美国数学竞赛 American Math Competition (AMC 8-12) (d) 在长岛地区常見的小数学家 Mathletes 数学竞赛</p>
                            </li>
                            <li>新SAT䃼习班。大学理事会 (College Board) 从2016 年3 月开始采用新的SAT 考题。我们为此专门准备了针对这一考试的课程和练习。 我们的课程涵盖了新SAT考试的所有可能的题型, 让学生做到充分的练习, 以收有备无患, 事半功倍之效。SAT课程包括阅读, 语法,词汇短文写作和数学。
                                <p>  英语课的内容包括(a)词汇、(b)语法、(c) 阅读和 (d)写作四部分。</p>
                            </li>
                            <li>Specialized High Schools Admission Test (SHSAT)特殊高中辅导高分班. 纽约市的学生在8年级升9年级 (进高中) 时, 可以参加进特殊高中的考试, 考试内容包括数学和英语, 满分为800分. 学生9年级时可以再考一次, 但内容会有增加。有关的各种类型的问题和题目学生都会有机会在学习中遇到， 并进行操练。</li>
                        </ol>
                        <p>
                            我们的老师经验丰富, 有数十年的课堂教学经验。他们都任教于美国的公立，私立大学 和中学。大道学苑的校长成丽虹从1990年就开始在纽约市和纽约州的教育系统工作， 有丰富的课堂教学和行政管理经验。 编写过教学大纲和各年级数学课程的教案。他在过去的十几年里帮助了无 数的学生实现了进长春滕校园深造的理想，其学. 生遍布了所有排名前30的大学。
                        </p>
                        <p>
                            我们非常希望你的孩子能和大家一起来经历这一挑战自我的历程。 让孩子们的周未过的充实而又有收获。在新的学年里不断地提高。
                        </p>
                    </div>
                </div>
                
                :
                <div className = 'en-font-text' >
                    <h3>BLVD Academy Introduction</h3>
                    <div>
                        <p>
                            The heartfelt purpose of Boulevard Academy is to improve the academic performance of our students. Through our enrichment programs, our students are given the opportunity to strengthen and perfect their skills in preparation for both their standardized and aptitude tests. Our enrichment programs propel them to excel, making their dreams of entering their desired higher education institutions a reality. Our programs at Boulevard Academy are thoughtfully designed to challenge our students, and at the same time making all efforts to support their school's curriculum. We offer the following programs:
                        </p>
                        <ol>
                            <li>
                                English and mathematics, designed for grades 3 to 12. The current New York State curriculum covers a wide range of topics, but at the same time the curriculum offers little depth. Our curriculum, on the other hand, provides an in-depth discuss of the topics. Our English classes are centered in the areas of vocabulary,grammar,critical reading, and creative writing. Our mathematics program addresses the level beyond the New York State curriculum, and the content of The Mathletes Contest, which is given in Nassau County, and also prepares students for the American Mathematics Competition (8w-12).

                            </li>
                            <li>
                                New SAT. In March, 2016, The College Board adopted a new SAT exam—an exam that included a number of changes and updates. Our SAT Prep course addresses those changes and covers all possible types of testing questions. Students will be well prepared and ready for the challenge.
                            </li>
                            <li>
                                New SAT. In March, 2016, The College Board adopted a new SAT exam—an exam that included a number of changes and updates. Our SAT Prep course addresses those changes and covers all possible types of testing questions. Students will be well prepared and ready for the challenge.</li>
                        </ol>
                        <p>
                            Our staff maintains decades of classroom teaching experience at both private and public universities, as well as at K - 12 schools. Mr. LihongCheng, the principal of Boulevard Academy, began his teaching career in 1983. Starting in 1990, he began teaching in schools in both New York City and New York State. He has a wealth of knowledge in implementing school curriculums. His teaching and administrative experience is exemplary; he has written (and continues to write) curriculums for math, as well as syllabi for different school districts. His graduating students can be found pursuing their education within the academic halls of our top 30 universities. Allow your child to participate in the enrichment programs at Boulevard Academy!
                        </p>
                        <p>
                            We hope your children can join the program. It will make their weekends both meaningful and highly productive. Just wait till you see their year-end grades!
                        </p>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default AboutUs
