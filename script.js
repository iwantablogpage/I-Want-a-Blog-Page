const blogPosts = [
  {
    date: "August 3rd, 2023",
    content: "Today was an incredible day. I met two new friends. They seem like genuinely good people. We instantly clicked, and I feel a sense of connection with them. I can't help but think that maybe, just maybe, they could be the friends I've been searching for all along. Friends who would stand by my side no matter what. Friends who would appreciate me for who I am. I'm excited to see where this newfound friendship will take us."
  },
  {
    date: "August 11th, 2023",
    content: "I've been thinking a lot lately. Zane has caused so much pain and trouble for my friends. I can't stand to see my friends suffer. That's why I've made a decision. I've devised a plan to rid us of Zane once and for all. It's risky, but I believe it's the only way to protect them. I've been researching different methods, and I think I've found the perfect one. I'll make it look like Zane overdosed on medicine. It'll be an unfortunate accident, but it's for the greater good. They deserve to live in peace, free from Zane's torment. I'll do whatever it takes to ensure their safety."
  },
  {
    date: "August 20th, 2023",
    content: "I can barely contain my excitement. I did it. I carried out my plan, and Zane is no longer a threat to my friends. I can't wait to tell them about my successful mission, but I have to find the right time."
  },
  {
    date: "August 23rd, 2023",
    content: "I thought they would be delighted and grateful, that they would understand the lengths I went to protect them. But when I told them what I did, their reactions shattered me. My once trusted friends were horrified and turned their backs on me. They refused to be friends with someone who resorted to extreme measures. I thought I was doing the right thing, but now I'm left alone, abandoned by the only people I thought understood me."
  },
  {
    date: "August 24th, 2023",
    content: "I miss them... I miss them so much. I can't imagine living without my friends. The thought of losing them is just too much. What should I do?"
  },
  {
    date: "August 26th, 2023",
    content: "If I tied them up and kept them somewhere that only I would know, they would forever be by my side, right?"
  }
];

const blogPostsContainer = document.getElementById("blog-posts");

blogPosts.forEach((post) => {
  const postElement = document.createElement("div");
  postElement.classList.add("blog-post");

  const dateElement = document.createElement("div");
  dateElement.classList.add("date");
  dateElement.textContent = post.date;
  postElement.appendChild(dateElement);

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  contentElement.textContent = post.content;
  postElement.appendChild(contentElement);

  blogPostsContainer.appendChild(postElement);
});

