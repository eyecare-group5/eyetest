import React from 'react'
import Nav from './Nav'

function About() {
  return (
    <>
    <Nav/>
<div className="py-16 bg-purple-200">  
  <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-purple-900">Understanding
            vision</h3>
          <p className="mb-6">Powerful, complex and fragile, the eye is the organ the most solicited from our five senses. Because vision is vital for learning, working and everyday living, we need to correct and protect it as well as prevent any visual defects or diseases.</p>
        </div>
        <img src="https://www.essilor.com/essilor-content/uploads/2016/07/push_tsv1.jpg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-purple-900">Visual health,
            a major public health concern</h3>
          <p className="mb-6">constantly solicited, the eye is vulnerable to many threats. It’s therefore critical to protect it and prevent any defects and diseases that can occur during one’s life. Getting regular examinations and protecting your eyes are essential to managing your vision capital.</p>
          
        </div>
        <img src="https://www.essilor.com/essilor-content/uploads/2016/07/push_tsv2.jpg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width={900} height={600} />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-purple-900">Visual
            impairment</h3>
          <p className="mb-6">myopia, hyperopia, astigmatism, presbyopia… the eye is a complex and fragile organ that can present defects. An eye that’s too long or too short, irregular curvature of the cornea, the slightest flexibility in the crystalline lens… every visual defect has a physiological explanation but also an appropriate corrective lens.</p>
          
        </div>
        <img src="https://www.essilor.com/essilor-content/uploads/2016/07/push_tsv3.jpg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width={900} height={600} />
      </div>
    </div>
  </div>
</div>

<div>
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
  <area rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
  <section className="relative pt-16 bg-blueGray-50">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words bg-blue-500 w-full mb-6 shadow-lg rounded-lg bg-blue-500">
            <img alt="..." src="https://www.optimax.co.uk/media/m4fjuj0w/lasik_2000.jpg" className="w-full align-middle rounded-t-lg" />
            <blockquote className="relative p-8 mb-4">
              <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                <polygon points="-30,95 583,95 583,65" className="text-blue-500 fill-current" />
              </svg>
              <h4 className="text-xl font-bold text-white">
                New vision
                challenges
              </h4>
              <p className="text-md font-light mt-2 text-white">
                From childhood to old age, our vision evolves as our eyes are exposed to different situations and risks. With changing lifestyles, other risks are emerging which must be addressed through adopting new habits. Today, for example, urbanization has encouraged indoor living that increases cases of myopia. It’s also accepted that the continual use of digital screens causes eye strain and can encourage the development of certain visual defects. Solutions exist for these new situations. We need to raise awareness, regularly check vision and provide appropriate solutions that are accessible to everyone
              </p>
            </blockquote>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  
                  <h6 className="text-xl mb-1 font-semibold"> Regularly check eyesight</h6>
                  <p className="mb-4 text-blueGray-500">
                     from childhood, the first mandatory eye tests should be carried out according to the personal health book at birth, at 8 days and then at 4, 9 and 24 months. 
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  
                  <h6 className="text-xl mb-1 font-semibold">
                    Adopt simple, everyday good habits for your eyes
                  </h6>
                  <p className="mb-4 text-blueGray-500">
                    It’s recommended to protect your eyes against UV rays by wearing sunglasses (CE and protection class 2 to 4) and lenses with filters to prevent overexposure to blue-violet light.People who work in environments where they are at risk of flying materials should be equipped with protective glasses.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  
                  <h6 className="text-xl mb-1 font-semibold">Correct vision with a prescription adapted to your visual needs</h6>
                  <p className="mb-4 text-blueGray-500">
                    There’s a solution for every visual defect and vision need. Because these can change over your lifetime, we recommend that you get regular eye exams to adapt correction. A visual defect may worsen if improperly corrected
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  
                  <h6 className="text-xl mb-1 font-semibold">Preserving
                    visual health</h6>
                  <p className="mb-4 text-blueGray-500">
                    Vision is an essential function for learning, working, moving around and driving as well as developing and maintaining social relationships in everyday life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            
          </div>
        </div>
      </div>
    </footer></section></div>

    </>
  )
}

export default About