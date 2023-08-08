import React, {useState} from 'react'
import './Home.css'
import oldWestburyBuilding from '../images/oldWestburyBuilding.jpg' 


function Home() {

    const [inChinese, setChinese] = useState(true);

    return (
         
        <div className='home'>

        <div className="home__extrasContentContainer">

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
        </div>

            <div className="home__mainContentContainer">

                {inChinese ? 
                <div className='home__text'>    

                    <div className = 'cn-font-text'>
                        <p>各位同学、家长， 大家好！</p>
                        <p>大道学苑 (Boulevard Learning Academy) 成立于2014年，其宗旨是行大道走正路。培养、帮助在校学生提高、加强基础知识的训练，打下扎实的文理功底，提高应试能力，为进入所期望的各类高等学府深造创造条件。当今美国初等教育的一个特点是所教内容非常广泛,但讲不深,讲不透。我们课程在现存大纲的基础上进行加强和提高。各类课程的设制就是围绕着这一目标。我们春季班提供3至12年级的英语和数学加强班课程。</p>
                        <ol>
                            <li>英语课的内容包括
                                <ul>
                                    <li>词汇加强和建立 </li>
                                    <li>阅读和</li>
                                    <li>语法和写作三部分。</li>
                                </ul>
                            </li>
                            <li>数学课的内容是在学校的基础上作加强和提高。在长岛地区常見的小数学家(Mathletes) 竞赛和全国范围的美国数学竞赛 (AMC)都会在课堂上讲解。</li>
                            <li>我们的新 SAT 辅导班课程涵盖了新SAT考试的所有可能的题型, 学生做到充分的练习, 以收有备无患和事半功倍之效。</li>
                        </ol>
                        <p>我们的老师经验丰富,有数十年的课堂教学经验。他们都任教于美国的公立、私立中学和大学。大道学苑的校长成丽虹从1990年就开始在纽约市和纽约州的教育系统工作，有丰富的课堂教学和行政管理经验。编写过教学大纲和各年级数学课程的教案。他对美国的教育系统有深刻的认识。他在过去的三十多年里帮助了无数的学生实现了进长春滕校园深造的理想，其学生遍布了所有排名前 30的大学。</p>
                        <p><b>秋季班将于9月9日开学</b>, 上课时间为下午1:30 - 4:30, 上课地点为:</p>
                        <p>希望你的孩子能和大家一起来经历这一挑战自我的历程。</p>
                        <p>让孩子们的周末过的充实而又有收获，并在新的学年里不断地提高。</p>
                     </div>
                </div>    
                : 
                <div className='home__text'>    

                    <div className = 'en-font-text'>
                        <p>Dear students and parents of BLVD Academy，</p>
                        <p>The heartfelt purpose of Boulevard Learning Academy (founded in 2014) is to improve the academic performance of our students. Through our enrichment programs, our students are given the opportunity to strengthen and perfect their skills in preparation for both their standardized and aptitude tests.  Our enrichment programs propel them to excel, making their dreams of entering their desired higher education institutions a reality.  Our programs at Boulevard Learning Academy are thoughtfully designed to challenge our students, and at the same time making all efforts to support their school's curriculum.  We offer the following programs:</p>
                        <ol>
                            <li><b>English and mathematics enrichment:</b> designed for grades 3 to 12.  The current New York State Learning Standards (NYLS) cover a wide range of topics, but at the same time the curriculum offers little depth.  Our curriculum, on the other hand, provides an in-depth discuss of the topics.  Our English classes are centered in the areas of vocabulary, grammar, critical reading, and creative writing.  </li>
                            <li>Our mathematics program addresses the level beyond the NYLS.  We also offer Mathletes Contest, which is given in Nassau County, and also prepare students for the Math Olympiads (Gr. 3 – 7) and American Mathematics Competition， AMC 8- 12 </li>
                            <li><b>New SAT prep:</b> In March, 2016, The College Board adopted a new SAT exam - an exam that included a number of changes and updates.  Our SAT Prep course addresses those changes and cover all possible types of testing questions.  Students will be well prepared and ready for the challenge.</li>
                        </ol>
                        <p>Our staff maintains decades of classroom teaching experience at both private and public universities, as well as at K - 12 schools.  Mr. Cheng, the principal and founder of Boulevard Learning Academy, began his teaching career in 1983.  Starting in 1990, he began his teaching in schools in New York City and in New York State from 1998 and on.  He has a wealth of knowledge in implementing school curriculums.  His teaching and administrative experiences are exemplary.  He has written (and continues to write) curriculums for math, as well as syllabi for different school districts. His graduating students can be found pursuing their education within the academic halls of our top 30 universities.  Fall program information sheet, calendar and registration forms all can be downloaded from this website.</p>
                        <p><b>The fall term starts on 9/9/2023.</b>  Classes are offered on Saturdays: 1:30PM  - 4:30 PM</p>
                        <p>We welcome your children to join the program.  It will make their learning both eaningful and highly productive.</p>
                        <p>Sincerely,</p>
                        <p>Mr. Lihong Cheng</p>
                    </div>
                </div>    
                }

                <div className = 'home__updates'>
                    {inChinese? 
                    <div className='cn-font-text'>
                        <h3>提示:</h3>
                        <span>
                            大道学苑2022年的暑期班已经开始招生了.<br/><br/>
                            表格填写以后，请电邮至以下地址  <a href="mailto:blvdacademy@gmail.com">blvdacademy@gmail.com</a><br/><br/>
                            详细信息请点击 "Courses"。  <br/><br/>
                            </span>  
                    </div>
                    :
                    <div className='en-font-text'>
                        <h3>Updates:</h3>
                        <span>
                            Registration for fall session has begun! <br/><br/>
                            To regsiter, please head to the forms tab, fill out the form, and email it to <a href="mailto:blvdacademy@gmail.com">blvdacademy@gmail.com</a><br/><br/>
                            For more information, please check out the "Courses".
                        </span>  
                    </div>
                    }
                </div>

            </div>

            <div className="home__extrasContentContainer">

                {/*<img  className='home__background' src={oldWestburyBuilding} alt="" /> */}
                <div className='home__declaration'>


                    <div className = 'home__declaration_text-bold'>   
                    {inChinese ? 
                        <div className='cn-font-text'>
                            Boulevard Learning Academy is a not for profit, 501(c)3, organization 

                        </div>
                   :
                        <div className='en-font-text'>
                            Boulevard Learning Academy is a not for profit, 501(c)3, organization 
                        </div>
                    }
                    </div>


                </div>  {/*End home declaration */}

                </div>


        </div>

    )
}

export default Home
