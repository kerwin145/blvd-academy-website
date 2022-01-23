import React, {useState} from 'react'
import './Home.css'
import oldWestburyBuilding from '../images/oldWestburyBuilding.jpg' 


function Home() {

    const [inChinese, setChinese] = useState(true);

    return (
        <div className='home'>
            <div className='home__background'>
                <img src={oldWestburyBuilding} alt="" />
            </div>

            {/*
              <table className = 'home__text_info-table'>
                <tr>
                    <td >上課地點:</td>                        
                    <td> 1400 Jericho Tpke, New Hyde Park, NY 11040          </td>
                </tr>
                <tr>
                    <td>電話: </td>
                    <td>(516)-304-8968, (516)-593-1671</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>  BlvdAcademy@gmail.com  </td>
                </tr>
            </table>
            

            <h3 className='home__announcement'>
                通知 Announcement:
            </h3>

            */}

            <div className='home__text'>    

                <span className='home__text-translate_panel'>
                    {inChinese ? 
                    <>
                        <button 
                            className = "cn-font-text home__text-translate--selected" onClick = {() => setChinese(true)}>
                                中文</button>
                        <button className = 'cn-font-text' onClick = {() => setChinese(false)}>English</button>
                    </>
                    :
                    <>
                    <button 
                    className = "cn-font-text" onClick = {() => setChinese(true)}>
                        中文</button>
                    <button className = 'cn-font-text home__text-translate--selected' onClick = {() => setChinese(false)}>English</button>
                    </>
                    }
               </span>      
                
                {inChinese ? 

                <div className = 'cn-font-text'>
                    <p>
                        各位家长同学，大家好!
                    </p>
                    <p>
                        大道学苑 (Boulevard Learning Academy) 成立于2014年，其宗旨是行大道走正路。培养、帮助在校学生提高、加强基础知识的训练，打下扎实的文理功底，提高应试能力，为进入所期望的各类高等学府深造创造条件。 当今美国初等教育的一个特点是所教内容非常广泛,但讲不深,讲不透。我们课程在现存大纲的基础上进行加强和提高。各类课程的设制就是围绕着这一目标。我们春季班提供3至12年级的英语和数学加强班课程:
                    </p>
                    <ol>
                        <li>
                            英语课的内容包括(a)词汇加强和建立 (b)阅读和 (d)语法和写作三部分。
                        </li>
                        <li>
                            数学课的内容是在学校的基础上作加强和提高。在长岛地区常見的小数学家(Mathletes) 竞赛和全国范围的美国数学竞赛 (AMC)都会在课堂上讲解。
                        </li>
                        <li>
                            我们的新 SAT 辅导班课程涵盖了新SAT考试的所有可能的题型, 学生做到充分的练习, 以收有备无患和事半功倍之效。
                        </li>
                    </ol>
                    <p>
                        我们的老师经验丰富,有数十年的课堂教学经验。他们都任教于美国的公立、私立中学和大学。大道学苑的校长成丽虹从1990年就开始在纽约市和纽约州的教育系统工作，有丰富的课堂教学和行政管理经验。 编写过教学大纲和各年级数学课程的教案。他对美国的教育系统有深刻的认识。他在过去的几十年里帮助了无数的学生实现了进长春滕校园深造的理想，其学生遍布了所有排名前 30的大学。
                        春季班将于2月5日开学,上课时间为下午1:30-4:30, 上课地点为:
                        1400 Jericho Tpke, New Hyde Park, NY 11040 (516)304-8968
                        Email: BlvdAcademy@gmail.com 网站: www.BlvdAcademy.org
                        希望你的孩子能和大家一起来经历这一挑战自我的历程。让孩子们的周末过的充实而又有收获，并在新的学年里不断地提高。
                    </p>
                    <p>
                        谢谢
                    </p>
                    成丽虹 <br/>
                    大道学苑
                </div>

                : 

                <div className = 'en-font-text'>
                    Dear students and parents of BLVD Learning Academy,
                    The heartfelt purpose of Boulevard Learning Academy (founded in 2014) is to improve the academic performance of our students. Through our enrichment programs, our students are given the opportunity to strengthen and perfect their skills in preparation for both their standardized and aptitude tests. Our enrichment programs propel them to excel, making their dreams of entering their desired higher education institutions a reality. Our programs at Boulevard Learning Academy are thoughtfully designed to challenge our students, and at the same time making all efforts to support their school's curriculum. We offer the following programs:

                    <ol>
                        <li>
                            English and mathematics enrichment, designed for grades 3 to 12. The current New York State Learning Standards (NYLS) cover a wide range of topics, but at the same time the curriculum offers little depth. Our curriculum, on the other hand, provides an in-depth discuss of the topics. Our English classes are centered in the areas of vocabulary, grammar, critical reading, and creative writing.
                        </li>
                        <li>
                            Our mathematics program addresses the level beyond the NYLS. We also offer Mathletes Contest, which is given in Nassau County, and also prepare students for the Math Olympiads (Gr. 3 - 7) and American Mathematics Competition， AMC 8- 12 .
                        </li>
                        <li>
                            (3) New SAT prep. In March, 2016, The College Board adopted a new SAT exam - an exam that included a number of changes and updates. Our SAT Prep course addresses those changes and covers all possible types of testing questions. Students will be well prepared and ready for the challenge.
                        </li>
                    </ol>
                    
                        Our staff maintains decades of classroom teaching experience at both private and public universities, as well as at K - 12 schools. Mr. Cheng, the principal and founder of Boulevard Learning Academy, began his teaching career in 1983. Starting in 1990, he began his teaching in schools in New York City and in New York State from 1998 and on. He has a wealth of knowledge in implementing school curriculums. His teaching and administrative experiences are exemplary. He has written (and continues to write) curriculums for math, as well as syllabi for different school districts. His graduating students can be found pursuing their education within the academic halls of our top 30 universities. Fall program information sheet, calendar and registration forms all can be downloaded from this website.
                        The spring term starts on 2/5/2022. Classes are offered on Saturdays: 1:30 - 4:30 PM
                        Address: 1400 Jericho Tpke, New Hyde Park, NY 11040
                        Phone: (516)304-8968
                        email: BlvdAcademy@gmail.com
                        web site: www.BlvdAcademy.org
                        We welcome your children to join the program. It will make their learning both meaningful and highly productive.
                        Yours,
                        Boulevard Learning Academy
                        Lihong Cheng
                        Principal
                </div>
                }


            </div>
        </div>
    )
}

export default Home
