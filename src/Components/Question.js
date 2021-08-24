import React, {useState} from 'react'



function Question(props) {
  const questionArr =[
    { 
      question : `	مدرستكم جديدة في التعليم عن بعد online؟ `, 
      answer : `نعم جديدة وكانت سابقاً Mona Academy بإدارتي وإشرافي نقبل كل الجنسيات الزيارات وغير الزيارات جميع الطلاب من أنحاء المملكة.`,
      isOpen : true
    },
    { 
      question : `	من أي صف تقبلون التسجيل؟ `, 
      answer : `قبل من عمر 4سنوات يعني من KG2/KG3 إلى الصف السادس.`,
      isOpen : false
    }, 
    { 
      question : `	لو رجع التعليم حضوري أين مقر مدرستكم؟ `, 
      answer : `نحن مستمرون عن بعد لنهاية العام الدراسي.`,
      isOpen : false
    },
    { 
      question : `	هل أنتم تدرسون المنهج المصري؟ `, 
      answer : `لا.. لا ندرسه وليس لنا علاقة بالمنهج المصري مطلقاً.. إنما أنا شخصياً بساعد الأمهات بمعرفة اجراءات التسجيل في السفارة المصرية.`,
      isOpen : false
    }, 
    { 
      question : `	ما هو منهج مدرستكم؟ وجنسية المعلمات؟ ؟ `, 
      answer : ` منهج مدرستنا أمريكي انترناشونال والمعلمات سوريات وأردنيات فقط و (الأكسنت عند المعلمات ممتاز).`,
      isOpen : false
    }, 
    { 
      question : `	متى يكون الدوام؟ `, 
      answer : `دوامنا يومياً من الساعة 9 صباحاً، حسب الجداول والخطة الأسبوعية.`,
      isOpen : false
    }, 
    { 
      question : `	هل لديكم شهادة معتمدة؟ `, 
      answer : `لم نحصل على الترخيص بعد (طبعاً مقدمين عليه من أكتر من 6 أشهر وننتظر)، لو طلع الترخيص شهادات مدرستنا معتمدة 100% وبالتالي ليس لدينا شهادة معتمدة حتى الآن لكن طلاب KG3 لا يحتاجون شهادة للتسجيل في الصف الأول.`,
      isOpen : false
    }, 
    { 
      question : `	في حال صدر الترخيص خلال العام الدراسي هل يحصل الطلاب على شهادة معتمدة؟ `, 
      answer : ` نعم أكيد.`,
      isOpen : false
    }, 
    {
      question : `	ما هو الحل بالنسبة لطلاب الابتدائي لضمان الشهادة؟؟ في حال تأخر الترخيص؟`,
      answer : ` التسجيل في السفارة المصرية بدون دراسة المنهج المصري أبداً.
    طبعاً نحن لا ينقصنا الا الترخيص ونكون مدرسة نظامية مية بالمية الصدق والإتقان والأمانة عنوان تميزنا.`,
      isOpen : false
    }
    ]
  const [faqs, setFaqs] = useState(questionArr)
  const toggleFAQ = index =>{
    setFaqs(faqs.map((faq, i)=>{
      if(i === index){
        faq.isOpen = !faq.isOpen
      }else{
        faq.isOpen = false
      }
      return faq
    }))
    //faq features
  } 

  let cardTextStyle = 'card-text bg-secondary p-3 rounded' 
  return (
    <div className='container q-container bg-white my-5' style={{direction:'rtl'}}>
      <div className='row justify-content-center'>
      <div className='col-12 mt-5'>
        <p className='font-bold fs-1'>
        الأسئلة الشائعة 

        </p>
      </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12 p-5 mb-5'>
          {
            faqs.map((faq, i) => (
              <div className="card card-question m-2" key={i} onClick={() => toggleFAQ(i)}>
              <div className="card-body">
                <h5 className="card-title f-3">{faq.question}</h5>
                <p className={cardTextStyle + (faq.isOpen ? '' : ' d-none')}>{faq.answer}</p>
              </div>
            </div>
            ))
          }          
        </div>

      </div>
    

    </div>
  )
}
Question.defaultProps = {
  cardTitle: "Card title",
  cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
}

export default Question

