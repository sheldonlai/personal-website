import {ListElement} from "../components/Templates/JaggedList";

export const home_content = [
  new ListElement({
    title: "GAN Image generator",
    description: `
      A experimental project using a convolutional Generative adversarial network to generate images. I have provided
      two built-in dataset configurations to either train on the Cifar-10 dataset or the CAT dataset. It also has configurations
      to adjust the number of convolutional layers, creativity vector size, and filter_depth.
      The discriminator's layers are composed of convolution layer with a window size of 5 and strides of 2.
      The output of the convolution will then feed into batch_norm and lastly be activated by a leaky relu activation
      function. The generator's layers are similar but instead of the convolution, it is replaced by deconvolution.
    `,
    url: "https://github.com/sheldonlai/GAN",
    img: "/img/gan_sample.png",
    caption: "The generated images of cats, with random creativity vectors as inputs to the generator.",
    used: ["Tensorflow", "Python3"]
  }),
  new ListElement({
    title: "Askalot: Q&A website for students",
    description: `
      A project designed for student to ask questions, share stories about their life, or even perhaps recommend teammates
      that they have worked with. Made use of React, and Material-UI with a Redux architecture on the front-end. Back-end
      uses Node.js 8.x with Express where logic is separated into API, Service, and Repository levels. 
      As for storage, Elasticsearch is for indexing records to allow quick search and MongoDB as the main database. Unit
      tests were written in Jest and executable in parallel.
    `,
    url: "https://github.com/sheldonlai/project211124",
    img: ["/img/askalot_sample.png", "/img/askalot_sample_2.png"],
    used: ["TypeScript", "Elasticsearch", "Redux", "React", "Draft.js", "Node.js", "MongoDB",
      "Material-UI", "Express", "Jest"]
  }),
  new ListElement({
    title: "Residual Network image classifier",
    description: `
      A project created to recreate the Residual network described in https://arxiv.org/abs/1512.03385. While the architecture 
      of the networks are the same (or so I believe), my program tested ways to transfer trained variables from a shallower
      ResNet to a deeper ResNet described in the README of the github link. Though I was unable to beat the performance
      of the original initialization training method, it was able to produce similar accuracy with slightly less
      computations require.
    `,
    url: "https://github.com/sheldonlai/resnet",
    used: ["Python3", "Tensorflow"]
  }),
  new ListElement({
    title: "Personal Profile Website",
    description: `
      This simple static website used to showcase some of the things I worked on during my free time. Like Askalot, it 
      made use of React, and Material-UI.
    `,
    url: "https://github.com/sheldonlai/personal-website",
    used: ["TypeScript", "React", "Material-UI"]
  }),
  new ListElement({
    title: "RNN word predictor: In Progress",
    description: `
      Working on a word suggestion program that uses word2vec representation of words and feed it into a LSTM network
      to predict what is likely to be the next word given a partial sentence. Maybe once I have trained a demo model, 
      I could look to add it to this website with Tensorflow.js.
    `,
    used: ["Python3", "Tensorflow"]
  }),
];