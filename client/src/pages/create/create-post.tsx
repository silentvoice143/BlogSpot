import CustomInput from "@/components/ui-v2/CustomInput";
import CustomTextArea from "@/components/ui-v2/CustomTextArea";
import { Input } from "@/components/ui/input";
import Tiptap from "@/editor";
import { H1Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { toast } from "sonner";

interface CollegeData {
  id: number;
  heading: string;
  description: string;
  college_data_category: {
    id: number;
    documentId: string;
    title: string;
  };
}

const CreatePost = () => {
  const initialPost = {
    title: "",
    description: "",
    picture:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    content: "",
    category: "",
  };

  const [postData, setPostData] = useState(initialPost);

  const handleChange = (key, value) => {
    setPostData({ ...postData, [key]: value });
  };
  const data = [
    {
      id: 1173,
      heading:
        "Southern Medical university | China | Admission, Eligibility Criteria, Fee Structure & Ranking",
      description:
        '<p style="text-align:justify;">Southern Medical University came into existence in the year 1951 and also known as Nanfang Medical University. It became one of the premier medical universities to study MBBS in China. It has approval from the Medical Council of India, (Now replaced by the National Medical Commission), World Health Organization, IMED (International Medical Education Directory), and also few other countries.</p><p style="text-align:justify;"><span style="color:#fafafa;">SMU China is built on more than 1 million square feet eco-friendly area. Also, the Southern Medical University has an experienced team of teachers and world-class infrastructure dedicated to the students. After completing the medical degree from here, students can appear in various screening tests and work as medical professionals in different countries.</span></p><p style="text-align:justify;"><span style="color:#fafafa;">This institution accepts direct admission in the MBBS course without passing any entrance exam. As the university does conduct the admission test or demand extra money in the form of donations. if a student completes the admission eligibility criteria of the university, then he/she can apply for admission in the MBBS course offered by the Southern Medical University China.</span></p><h2 style="text-align:justify;"><span style="color:#fafafa;">Southern Medical University Highlights</span></h2><div style="margin-left:0pt;" dir="ltr" align="center"><figure class="table" style="width:100%;"><table class="ck-table-resized" style="border-collapse:collapse;border-style:none;"><colgroup><col style="width:32.46%;" width="243"><col style="width:67.54%;" width="333"></colgroup><tbody><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Full Name of University</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Southern Medical University (SMU China)</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Founded Year</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">1951</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Approved by</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"> National Medical Commission (replaced MCI)</span></span></p><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">&nbsp;Medical councils of other nations</span></span></p><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">International Medical Education Directory (IMED)</span></span></p><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">&nbsp;Ministry of Education, China</span></span></p><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">&nbsp;World Health Organization</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Popular Course&nbsp;</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">MBBS</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Course Duration</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">5 Years (including classroom study programme)</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Medium of Teaching</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">English Language</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>NEET Eligibility</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Compulsory for Indian Aspirants</span></span></p></td></tr></tbody></table></figure></div>',
      child_sequence: null,
      college_data_category: {
        id: 14,
        documentId: "g1rpzv1zcipt3kyni3axswfm",
        title: "1_College_Info",
      },
    },
    {
      id: 1174,
      heading: "Why choose Southern Medical University?",
      description:
        '<ul><li><p style="text-align:justify;">No language barrier- The university offers education in the English language so students will never feel difficult to understand the lessons taught in the class. It is completely on the students in which language they want to study.</p></li><li><p style="text-align:justify;">MCI/NMC approved medical university- This reputed medical institute is one of the MCI/NMC approved medical universities in China. The Indian Embassy in China has issued the list of 45 medical universities, which are considered to be ideal for best.</p></li><li><p style="text-align:justify;">Globally ranked university- This medical university is famous worldwide and holds a place in the ranking of popular rating agencies. Students from various nations including neighboring countries, get enrolled here.</p></li><li><p style="text-align:justify;">Degree acceptable at the international Stage- Students can work in several countries including India and China, After completing MBBS from southern Medical university</p></li><li><p style="text-align:justify;">Budget-friendly expenses- The tuition fee of the institute is pretty affordable and less in comparison to other institutes. Also, the accommodation fee of the university is not expensive at all. An off-campus staying facility will be in your budget.</p></li><li><p style="text-align:justify;">Secure and well-furnished accommodation arrangements- The hostel rooms are designed according to the need of international students and every mandatory facility will be offered to you. Also, few other amenities of the hostel are dedicated to the students living here. Security arrangements are up to the mark.</p></li><li><p style="text-align:justify;">Homely feeling for Indian students-Indian food will be offered in the hostel mess including the variety of veg and non-veg. Also, several Indian students are studying here, so new Indian aspirants will get the company of them.</p></li><li><p style="text-align:justify;">Admission without entrance Exam- The university does not conduct any entrance exam for MBBS admission. Also, apart from Fee, there is no need to pay extra money. The only compulsory thing is to do as a student, is to complete the admission eligibility criteria for enrollment.</p></li><li><p style="text-align:justify;">Low ratio of students and teachers- the number of students in every class is limited, so students can get the attention of teachers in the proper manner. the benefit of the low ratio of students and teachers is students will have proper time to solve their doubts.</p></li><li><p style="text-align:justify;">Global working opportunity- students will get a chance to work in various countries after completing the degree. Also, they can apply and appear in various medical screening tests conducted by the medical councils of several nations.</p></li></ul>',
      child_sequence: null,
      college_data_category: {
        id: 14,
        documentId: "g1rpzv1zcipt3kyni3axswfm",
        title: "1_College_Info",
      },
    },
    {
      id: 1175,
      heading: "Southern Medical University Ranking",
      description:
        '<p style="text-align:justify;">The US New Ranking has given 93rd rank to the Southern Medical University Ranking in China, 244th rank in the Asia continent, and 984th rank globally. The university is one of the reputed and oldest MCI/NMC approved medical Universities in China and known for providing world-class education.</p><p style="text-align:justify;">According to the 4icu ranking, this medical institute holds 158th rank in China and 3336th rank worldwide. several measures of the university have been tested to categorized the ranking.</p><p style="text-align:justify;"><strong>4 ICU Ranking</strong></p><div style="margin-left:0pt;" dir="ltr" align="center"><figure class="table"><table class="ck-table-resized" style="border-collapse:collapse;border-style:none;"><colgroup><col style="width:50%;" width="333"><col style="width:50%;" width="333"></colgroup><tbody><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>In China</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">158th</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Globally</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">3336th</span></span></p></td></tr></tbody></table></figure></div><p style="text-align:justify;"><span style="color:#fafafa;"><strong>US News Ranking</strong></span></p><div style="margin-left:0pt;" dir="ltr" align="center"><figure class="table"><table class="ck-table-resized" style="border-collapse:collapse;border-style:none;"><colgroup><col style="width:50%;" width="333"><col style="width:50%;" width="333"></colgroup><tbody><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>In China</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">93rd</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>In Asia</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">244th</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Global</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">984th</span></span></p></td></tr></tbody></table></figure></div>',
      child_sequence: null,
      college_data_category: {
        id: 17,
        documentId: "t152hber319075ei118suuul",
        title: "4_Rating_&_Reviews_ &_Ranking",
      },
    },
    {
      id: 1176,
      heading: "Southern Medical University Fee Structure",
      description:
        '<p style="text-align:justify;"><span style="color:#fafafa;">According to the southern medical university fee structure, the annual tuition fee for the MBBS course is 33,000 RMB (5075 USD) that includes the entire academic fee. hostel fee and mess fee of the institution will be paid separately from the tuition fee.</span></p><p style="text-align:justify;"><span style="color:#fafafa;">If students want to accommodate in university hostel then he/she can proceed for online booking of the rooms. They have to inform the hostel management prior to booking. Usually, students book their room, just after getting the invitation letter from the university. The hostel fee is 6000 RMB including the mess or canteen fees.</span></p><div style="margin-left:0pt;" dir="ltr" align="center"><figure class="table"><table class="ck-table-resized" style="border-collapse:collapse;border-style:none;"><colgroup><col style="width:33.33%;" width="333"><col style="width:33.33%;" width="333"><col style="width:33.34%;" width="333"></colgroup><tbody><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>TUITION FEE/YEAR(RMB)</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>HOSTEL FEE/YEAR(RMB)</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>TUTION+HOSTEL(RMB)</strong></span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">33000</span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">6000</span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:8pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">39000</span></span></p></td></tr></tbody></table></figure></div>',
      child_sequence: null,
      college_data_category: {
        id: 15,
        documentId: "duc96es09hophr5e5nrz348v",
        title: "2_Course_&_Fees",
      },
    },
    {
      id: 1177,
      heading: "Southern Medical University Courses",
      description:
        '<p style="text-align:justify;">The duration of the MBBS study programme is 5 years. It is offered under the Southern Medical University Courses that include classroom programme and practical classes in the university labs. Experienced professionals are available there, to enhance the knowledge of students.</p><p style="text-align:justify;">Also, students will get training to get a dream career in the medical stream at an international level. SMU China is in academic partnership with 51 universities and colleges across the globe to provide a better atmosphere to study MBBS in China.</p><div style="margin-left:0pt;" dir="ltr" align="center"><figure class="table"><table class="ck-table-resized" style="border-collapse:collapse;border-style:none;"><colgroup><col style="width:50%;" width="333"><col style="width:50%;" width="333"></colgroup><tbody><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Popular Course</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">MBBS</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Course Duration&nbsp;</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">5 Years</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Entrance Exam</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">No</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Program</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Full- Time Study Programme</span></span></p></td></tr></tbody></table></figure></div>',
      child_sequence: null,
      college_data_category: {
        id: 15,
        documentId: "duc96es09hophr5e5nrz348v",
        title: "2_Course_&_Fees",
      },
    },
    {
      id: 1178,
      heading: "Southern Medical University Eligibility Criteria",
      description:
        '<p style="text-align:justify;">SMU China does not conduct any entrance exam for inviting admission to the MBBS course offered by it. However, there is no relaxation in completing the Southern Medical University eligibility criteria. In case any student has not fulfilled it then their application will be rejected by the university admission administration.</p><p style="text-align:justify;">NEET is compulsory to pass by Indian medical students to study MBBS in China. As it was made compulsory by the Medical Council of India in the year (the regulatory body of Medical Education at that time).</p><div style="margin-left:0pt;" dir="ltr" align="center"><figure class="table" style="width:100%;"><table class="ck-table-resized" style="border-collapse:collapse;border-style:none;"><colgroup><col style="width:20.99%;" width="224"><col style="width:79.01%;" width="389"></colgroup><tbody><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Age Limit</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Applicant must be older than 17 years at the time of application or at the end of the year. Candidates above 30 years will not be permitted to apply. Their application will not be accepted by the university administration.</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>Education Qualification</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">Candidates should hold at least 50% marks in higher secondary board exams from a recognizable education board like the state board or CBSE or ICSE board. Biology, physics, and chemistry should be as main subjects in the higher secondary standard.</span></span></p></td></tr><tr style="height:0pt;"><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><strong>NEET Qualified</strong></span></span></p></td><td style="border-color:#000000;border-width:1pt;overflow-wrap:break-word;overflow:hidden;padding:5pt;vertical-align:top;"><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr"><span style="color:#fafafa;font-family:Roboto,sans-serif;font-size:11.5pt;"><span style="font-style:normal;font-variant:normal;font-weight:400;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;">According to the official announcement of the Medical Council of India in the year 2018, every applicant has to pass the National Eligibility Cum Entrance Test.</span></span></p></td></tr></tbody></table></figure><p style="text-align:justify;">Apart from the age limit and educational qualification, physical ability is compulsory. Students should be mentally stable and the medical certificate should be submitted at the time of admission.</p></div>',
      child_sequence: null,
      college_data_category: {
        id: 16,
        documentId: "ukx0cce8s2zhf4j20qd0wu3t",
        title: "3_Admissions_&_Eligibility",
      },
    },
    {
      id: 1179,
      heading: "Southern Medical University Admissions process",
      description:
        '<p style="text-align:justify;">It is compulsory that students follow the admission process of Southern Medical University to apply for MBBS admission. In case any step skipped or missed by the students, then the university can cancel the admission application. Also, the candidate may disqualify for admission for that year. Get complete details of the admission process over a call. Contact us now</p><h3 style="text-align:justify;">Important Documents</h3><p style="text-align:justify;">After completing the Southern Medical University admissions eligibility criteria, a few important documents are mandatory to be submitted along with the application. in case, students got the acceptance letter from the university then a few other documents are mandatory to be presented by the applicant to the admission administration.</p><ul><li><p style="text-align:justify;">Marksheet of 10th board exam</p></li><li><p style="text-align:justify;">Certificate of 12th board Exam</p></li><li><p style="text-align:justify;">Valid passport of the candidate</p></li><li><p style="text-align:justify;">Study VISA issued by the Embassy of China in India</p></li><li><p style="text-align:justify;">Birth certificate of the applicant</p></li><li><p style="text-align:justify;">Passport size photograph</p></li><li><p style="text-align:justify;">Invitation letter for admission received from the Southern Medical University</p></li><li><p style="text-align:justify;">Fee payment receipt</p></li><li><p style="text-align:justify;">Medical report of the candidate</p></li></ul>',
      child_sequence: null,
      college_data_category: {
        id: 16,
        documentId: "ukx0cce8s2zhf4j20qd0wu3t",
        title: "3_Admissions_&_Eligibility",
      },
    },
    {
      id: 1180,
      heading: "Southern Medical University Hostel accommodation",
      description:
        '<p style="text-align:justify;">The hostel rooms of Southern Medical University is designed according to the need of international students, coming here to study. A completely separate hostel block for international students inside the university campus. It is just walking distance away from the administration block of the institution.</p><p style="text-align:justify;">One Room is designed for two, three, or four students with a separate washroom, air-condition facility, and 24 hrs running water. Students can choose the sharing room according to their budget and preferences. Single occupancy rooms are only for Ph.D. students, studying at Southern Medical University.</p><p style="text-align:justify;">every student will get bedding, furniture, and other mandatory stuff in the room by the hostel administration. There are 20 multistorey buildings on the campus to accommodate more than 5000 students at a time.</p><h3 style="text-align:justify;">Amenities</h3><ul><li><p style="text-align:justify;">Separate hostel rooms for international students</p></li><li><p style="text-align:justify;">Common kitchen, gym, laundry, and living area for every floor</p></li><li><p style="text-align:justify;">Lift service, Sports facilities inside the campus</p></li><li><p style="text-align:justify;">Medical facilities</p></li><li><p style="text-align:justify;">International channels on Cable TV in a common area, refrigerator, internet connectivity</p></li><li><p style="text-align:justify;">Well, sanitized kitchens will offer Indian food including multi cuisines of the different countries</p></li><li><p style="text-align:justify;">Market, banking &amp; ATMs, stationery stores, and other essentials are available near the university campus.</p></li></ul>',
      child_sequence: null,
      college_data_category: {
        id: 21,
        documentId: "j7u214ygp4h3npworsphdi9j",
        title: "5_Hostel_&_Accommodations",
      },
    },
  ];

  //   let tableContent = {
  //     collegeInfo: {
  //       title: "College Info",
  //       contents: [
  //         data.filter(
  //           (item) => item.college_data_category.title === "1_College_Info"
  //         ),
  //       ],
  //     },
  //     collegeInfo: {
  //       title: "College Info",
  //       contents: [
  //         data.filter(
  //           (item) => item.college_data_category.title === "1_College_Info"
  //         ),
  //       ],
  //     },
  //   };

  const groupedData = data.reduce(
    (acc, item) => {
      const category = item.college_data_category.title;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, CollegeData[]>
  );

  const customdata = data.map((item) => {
    return {
      ...item,
      description: item.description.slice(1, 30),
    };
  });

  console.log(customdata);

  return (
    <div className="relative flex justify-center flex-1 w-screen h-auto p-8 overflow-x-hidden overflow-y-auto">
      <div className="flex w-[800px]">
        <button
          onClick={() =>
            toast("Event has been created", {
              description: <h1 className="text-red-300">hello</h1>,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          click
        </button>
        <div className="flex flex-col flex-1">
          <CustomTextArea
            expandable={true}
            value={postData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="px-0 font-semibold text-40-48 placeholder:text-gray-secondary2 text-gray-secondary1"
            placeholder="Type your title here..."
          />
          <CustomTextArea
            expandable={true}
            value={postData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="px-0 text-lg placeholder:text-gray-secondary2 text-gray-secondary1 "
            placeholder="Type your description here..."
          />
          <div className="mt-4 ">
            <Tiptap />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
