import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image6 from '../slider/image6.jpg';
import image7 from '../slider/image7.jpg';
import image8 from '../slider/image8.jpg';
import image9 from '../slider/image9.jpg';
import image10 from '../slider/image10.jpg';
import image11 from '../slider/image11.jpg';
import image12 from '../slider/image12.jpg';

const cardData = [
  {
    title: 'Sougata Kansabanik',
    description: 'Sougata is an enthusiastic Front-end developer!',
    imageUrl: image12,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/Souzumaki',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'linkedin.com/in/sougata-kansabanik-2987b2201',
    email: 'sougatakansabanik@gmail.com',
  },
  {
    title: 'Upal Mitra',
    description: 'Upal is a skilled web developer!',
    imageUrl: image6,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/Upalnoni007',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'https://www.linkedin.com/in/upalmitra-98677b214/',
    email: ' upalnoni@gmail.com',
  },
  {
    title: 'Suman Majhi',
    description: 'Suman is a passionate developer!',
    imageUrl: image10,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/Smgit5 ',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'https://in.linkedin.com/in/suman-maji-451916214     ',
    email: 'sumanmaji349@gmail.com',
  },
  {
    title: 'Nilay Pal',
    description: 'Nilay is an enthusiastic web developer!',
    imageUrl: image9 ,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/NilayPal',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'https://www.linkedin.com/in/nilay-pal-2159b8214/',
    email: 'nilaypal96@gmail.com',
  },

  {
    title: 'Arya Dewanji',
    description: 'Arya is a Full-stack developer!',
    imageUrl: image7,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/k0ntrol1502',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'https://www.linkedin.com/in/arya-dewanji-92b678224',
    email: 'ardewanji@gmail.com',
  },
  {
    title: 'Saumyapratim Das',
    description: 'Saumyapratim is a Software engineer !',
    imageUrl: image11,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/Soumyadas15',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'https://www.linkedin.com/in/saumyapratim-das-98a02b18b',
    email: 'saumyadas2017@gmail.com',
  },
  {
    title: 'Priyanshu Gupta',
    description: 'Priyanshu is a curious software engineer!',
    imageUrl: image8,
    buttonLabel: 'GitHub',
    buttonLink: 'https://github.com/priyanshug01',
    buttonBgColor: '#ff5f5f',
    linkedinButtonLabel: 'LinkedIn',
    linkedinButtonLink: 'https://www.linkedin.com/in/priyanshu-gupta-32556b20b',
    email: 'priyanshu945pg@gmail.com',
  },
];

const Cards = () => {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1600px', margin: '0 auto' }}>
      {cardData.map((data, index) => (
        <Card key={index} sx={{ width: 'calc(25% - 20px)', margin: '10px'}}>
          <CardMedia
            component="img"
            alt={data.title}
            height="370"
            image={data.imageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'mazius', fontSize: '16px' }}>
              {data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
             Email: {data.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ bgcolor: data.buttonBgColor, color: '#fff', '&:hover': { bgcolor: data.buttonBgColor === '#ff5f5f' ? '#af2d2d' : '#1e7d37' } }} href={data.buttonLink} target="_blank">
              {data.buttonLabel}
            </Button>
            <Button size="small" sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#fff', color: '#000' } }} href={data.linkedinButtonLink} target="_blank">
              {data.linkedinButtonLabel}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Cards;