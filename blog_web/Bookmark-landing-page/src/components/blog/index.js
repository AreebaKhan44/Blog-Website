// import React, { useState } from 'react';
// import { Container, Typography, Grid, TextField, Button } from '@mui/material';
// import axios from 'axios';

// function Blog() {
//   const [blogTopic, setBlogTopic] = useState('');
//   const [blogTopicIdeas, setBlogTopicIdeas] = useState('');
//   const [blogSection, setBlogSection] = useState('');
//   const [blogSectionIdeas, setBlogSectionIdeas] = useState('');
//   const [blogExpander, setBlogExpander] = useState('');
//   const [blogExpanded, setBlogExpanded] = useState('');

//   const handleBlogTopicSubmit = (e) => {
//     e.preventDefault();
//     const userBlogTopic = blogTopic.trim();
//     if (!userBlogTopic) {
//       setBlogTopicIdeas('Please enter a blog topic.');
//       return;
//     }
    
//     const ideas = generateIdeas(userBlogTopic);
//     setBlogTopicIdeas(ideas);
//   };

//   const generateIdeas = (topic) => {
//     const ideas = [];
//     ideas.push(`1. Introduction to ${topic}`);
//     ideas.push(`2. The benefits of ${topic}`);
//     ideas.push(`3. Exploring ${topic} trends`);
//     return ideas.join('\n');
//   };

//   const handleBlogSectionSubmit = (e) => {
//     e.preventDefault();
//     const userBlogTitle = blogSection.trim();
//     if (!userBlogTitle) {
//       setBlogSectionIdeas('Please enter a blog title to generate sections.');
//       return;
//     }
//     const sections = generateSections(userBlogTitle);
//     setBlogSectionIdeas(sections);
//   };

//   const generateSections = (title) => {
//     const sections = [];
//     sections.push(`1. Introduction to ${title}`);
//     sections.push(`2. Key Points about ${title}`);
//     sections.push(`3. Conclusion on ${title}`);
//     return sections.join('\n');
//   };

  
//   const handleBlogExpanderSubmit = async (e) => {
//     e.preventDefault();
//     const userSectionTitle = blogExpander.trim();
//     if (!userSectionTitle) {
//       setBlogExpanded('Please enter a section title to expand upon.');
//       return;
//     }
  
//     try {
//       const response = await axios.post('/api/generate_blog_sections', {
//         blogSection: userSectionTitle,
//       });
//       setBlogExpanded(response.data.generatedSection);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h3" mt={5}>
//         AI Blog Writing Tool
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <form onSubmit={handleBlogTopicSubmit}>
//             <TextField
//               fullWidth
//               id="blogTopic"
//               label="What topic do you want to get blog ideas on?"
//               variant="outlined"
//               value={blogTopic}
//               onChange={(e) => setBlogTopic(e.target.value)}
//             />
//             <Button type="submit" variant="contained" color="primary" mt={2}>
//               Generate Blog Ideas
//             </Button>
//           </form>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography variant="body1">{blogTopicIdeas}</Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <form onSubmit={handleBlogSectionSubmit}>
//             <TextField
//               fullWidth
//               id="blogSection"
//               label="Enter the Blog Title to Generate Sections"
//               variant="outlined"
//               value={blogSection}
//               onChange={(e) => setBlogSection(e.target.value)}
//             />
//             <Button type="submit" variant="contained" color="primary" mt={2}>
//               Generate Blog Sections
//             </Button>
//           </form>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography variant="body1">{blogSectionIdeas}</Typography>
//         </Grid>
//       </Grid>

//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <form onSubmit={handleBlogExpanderSubmit}>
//             <TextField
//               fullWidth
//               id="blogExpander"
//               label="Enter the Blog Section Title to Expand"
//               variant="outlined"
//               value={blogExpander}
//               onChange={(e) => setBlogExpander(e.target.value)}
//             />
//             <Button type="submit" variant="contained" color="primary" mt={2}>
//               Expand on the Title
//             </Button>
//           </form>
//         </Grid>
//         <Grid item xs={6}>
//           <Typography variant="body1">{blogExpanded}</Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Blog;











import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button,Box } from '@mui/material';
import axios from 'axios';
import { API_BASE_URL } from './config'; // Import your API base URL from config.js

function Blog() {
  const [blogTopic, setBlogTopic] = useState('');
  const [blogTopicIdeas, setBlogTopicIdeas] = useState('');
  const [blogSection, setBlogSection] = useState('');
  const [blogSectionIdeas, setBlogSectionIdeas] = useState('');
  const [blogExpander, setBlogExpander] = useState('');
  const [blogExpanded, setBlogExpanded] = useState('');

  const handleBlogTopicSubmit = async (e) => {
    e.preventDefault();
    const userBlogTopic = blogTopic.trim();
    if (!userBlogTopic) {
      setBlogTopicIdeas('Please enter a blog topic.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/generate_blog_topics`, {
        blogTopic: userBlogTopic,
      });
      setBlogTopicIdeas(response.data.generatedTopic);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBlogSectionSubmit = async (e) => {
    e.preventDefault();
    const userBlogTitle = blogSection.trim();
    if (!userBlogTitle) {
      setBlogSectionIdeas('Please enter a blog title to generate sections.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/generate_blog_sections`, {
        blogSection: userBlogTitle,
      });
      setBlogSectionIdeas(response.data.generatedSection);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBlogExpanderSubmit = async (e) => {
    e.preventDefault();
    const userSectionTitle = blogExpander.trim();
    if (!userSectionTitle) {
      setBlogExpanded('Please enter a section title to expand upon.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/generate_blog_sections`, {
        blogSection: userSectionTitle,
      });
      setBlogExpanded(response.data.generatedSection);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h3" mt={2}>
        AI Blog Writing Tool
      </Typography>
      <Box container spacing={3} mt={6}>
        <Box item xs={6}>
          <form onSubmit={handleBlogTopicSubmit}>
            <TextField
              
              fullWidth
              id="blogTopic"
              label="What topic do you want to get blog ideas on?"
              variant="outlined"
              value={blogTopic}
              onChange={(e) => setBlogTopic(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{marginTop : `2rem`}} >
              Generate Blog Ideas
            </Button>
          </form>
        </Box>
        <Grid item xs={6} px={`2rem`} py={`2rem`}>
          
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blogTopicIdeas }}></Typography>
       
        </Grid>
      </Box>

      <Box Box container spacing={3}>
        <Grid item xs={6} >
          <form onSubmit={handleBlogSectionSubmit}>
            <TextField
              fullWidth
              id="blogSection"
              label="Enter the Blog Title to Generate Sections"
              variant="outlined"
              value={blogSection}
              onChange={(e) => setBlogSection(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{marginTop : `2rem`}}>
              Generate Blog Sections
            </Button>
          </form>
        </Grid>
        <Grid item xs={6} px={`2rem`} py={`2rem`}>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blogSectionIdeas }}></Typography>
        </Grid>
      </Box>

      <Box container spacing={3}>
        <Box item xs={6}>
          <form onSubmit={handleBlogExpanderSubmit}>
            <TextField
              fullWidth
              id="blogExpander"
              label="Enter the Blog Section Title to Expand"
              variant="outlined"
              value={blogExpander}
              onChange={(e) => setBlogExpander(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{marginTop : `2rem`}}>
              Expand on the Title
            </Button>
          </form>
        </Box>
        <Grid item xs={6} px={`2rem`} py={`2rem`}>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blogExpanded }}></Typography>
        </Grid>
      </Box>
    </Container>
  );
}

export default Blog;























































































