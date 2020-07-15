import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';

// Redux

// Theme

// Custom Components
import TermsContent from './TermsContent';
import Navbar from '../Navbar/Navbar';
import Footer from '../Landing/Footer';

function Terms() {
  return (
    <>
      <Box>
        <Navbar />
        <Container maxWidth='lg'>
          <TermsContent />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Terms;
