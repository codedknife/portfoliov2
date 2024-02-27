// allow the use of react components
'use client'; 

// custom css
import './page.module.css';

// imports
import React, {useState} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CContainer, CRow, CCol, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CCollapse, CCardBody} from '@coreui/react';
import {CNav, CNavItem, CNavLink, CButton, CImage, CFormSwitch, CBadge} from '@coreui/react';
import {CTable, CTableHead, CTableHeaderCell, CTableRow, CTableBody, CTableDataCell} from '@coreui/react';
import { CCard, CCardTitle, CCardText, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import { CTabContent, CTabPane } from '@coreui/react';
import { CCarousel, CCarouselItem} from '@coreui/react';
export default function Home() {

  // for experiences tab
  const[activeKey, setActiveKey] = useState(1);

  // for experiences popup
  const [UndergraduateLearningAssistant, setUndergraduateLearningAssistant] = useState(false);
  const [StudentFrontendAssistant, setStudentFrontendAssistant] = useState(false);
  const [ITIntern, setITIntern]= useState(false);
  const [WebContentAdmin, setWebContentAdmin] = useState(false);

  // for the mobile navbar
  const [visible, setVisible] = useState(false)

  return (
    <main>

<CContainer fluid>
    <CNavbar colorScheme="light" expand="lg" placement="fixed-top" style={{backgroundColor: 'rgb(255, 255, 255)', fontSize: '1.25rem'}}>
        <CCol style={{marginLeft: '0.5rem'}}>
        <CNavbarBrand href="#" style={{color: 'rgb(253, 134, 110)'}}>Ashley Tran</CNavbarBrand>
        </CCol>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
        <CCol>
        <CNavbarNav className="justify-content-end">
          <CNavItem>
            <CNavLink href="#">About</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#experiences">Experiences</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#projects">Projects</CNavLink>
          </CNavItem>
        </CNavbarNav>
        </CCol>
        </CCollapse>
        </CNavbar>
      </CContainer>
      <CContainer id="about" className="text-center" style={{padding: '1rem', marginBottom: '15rem', marginTop: '15rem'}}>
        <CRow xs={{ gutterY: 5 }}>
          <CCol sm={12} md={6}>
            <CImage fluid src="/profile_placeholder.png" style={{ border: '0.5rem solid rgb(253, 134, 110)', borderRadius: '50%' }} />
          </CCol>
          <CCol sm={12} md={6}>
            <h1>I'm <span style={{color: 'rgb(253, 134, 110)'}}>Ashley</span>,</h1>
            <p>a Computer Science Graduate @ 
              <span style={{color: 'rgb(24,69,59)', marginLeft: '0.5rem'}}>
                <strong>Michigan State University</strong>
              </span>
            </p>
            <CContainer style={{ wordSpacing: '0.2em' }}>
            <p>
            As a recent graduate entering the frontend web development industry, I'm enthusiastic about applying my fresh skills and knowledge to create engaging online experiences. With a solid foundation in coding and a passion for design, I'm eager to contribute to innovative projects and continue learning from experienced professionals.
            </p>
            <CButton color="light" style={{margin: '0.5rem'}} href="https://linkedin.com/in/ash-tran">LinkedIn</CButton>
            <CButton color="dark"  style={{margin: '0.5rem'}} href="https://github.com/codedknife">GitHub</CButton>
            </CContainer>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer id="experiences" style={{padding: '1rem', marginBottom: '15rem', scrollMarginTop: "70px"}}>
      <h2 style={{color: 'rgb(253, 134, 110)'}}>Experiences</h2>
      <CTable bordered small hover>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
            <CTableHeaderCell scope="col">Company</CTableHeaderCell>
            <CTableHeaderCell scope="col">Date</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
        <CTableRow style={{cursor: 'pointer'}} onClick={() => setWebContentAdmin(!WebContentAdmin)}>
            <CTableDataCell>Web Content Administrator</CTableDataCell>
            <CTableDataCell>MSU College of Engineering</CTableDataCell>
            <CTableDataCell><CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>May 2024 - Present</CBadge></CTableDataCell>
          </CTableRow>
          <CTableRow style={{cursor: 'pointer'}} onClick={() => setUndergraduateLearningAssistant(!UndergraduateLearningAssistant)}>
            <CTableDataCell>Undergraduate Learning Assistant</CTableDataCell>
            <CTableDataCell>MSU College of Engineering</CTableDataCell>
            <CTableDataCell><CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Jan 2024 - May 2024</CBadge></CTableDataCell>
          </CTableRow>
          <CTableRow style={{cursor: 'pointer'}} onClick={() => setStudentFrontendAssistant(!StudentFrontendAssistant)}>
            <CTableDataCell>Student Frontend Web Assistant</CTableDataCell>
            <CTableDataCell>MSU College of Engineering</CTableDataCell>
            <CTableDataCell><CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>May 2023 - May 2024</CBadge></CTableDataCell>
          </CTableRow>
          <CTableRow style={{cursor: 'pointer'}} onClick={() => setITIntern(!ITIntern)}>
            <CTableDataCell>IT Intern</CTableDataCell>
            <CTableDataCell>North American Lighting</CTableDataCell>
            <CTableDataCell><CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>May 2022 - Aug 2022</CBadge></CTableDataCell>
          </CTableRow>
          <CTableRow style={{cursor: 'pointer'}}>
            <CTableDataCell>Cashier/Server</CTableDataCell>
            <CTableDataCell>Asia's Finest</CTableDataCell>
            <CTableDataCell><CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Dec 2019 - Dec 2023</CBadge></CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CContainer>


    <CModal
      alignment="center"
      visible={WebContentAdmin}
      onClose={() => setWebContentAdmin(false)}
      aria-labelledby="Web Content Administrator"
    >
      <CModalHeader onClose={() => setWebContentAdmin(false)}>
        <CModalTitle id="Web Content Administrator">Web Content Administrator</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CContainer class="text-center">
        <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>East Lansing, MI</CBadge>
        <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Hybrid</CBadge>
        </CContainer>
        <ul>
        </ul>          
      </CModalBody>
      <CModalFooter>
        <CButton color="dark" onClick={() => setWebContentAdmin(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>


    <CModal
      alignment="center"
      visible={UndergraduateLearningAssistant}
      onClose={() => setUndergraduateLearningAssistant(false)}
      aria-labelledby="Undergraduate Learning Assistant"
    >
      <CModalHeader onClose={() => setUndergraduateLearningAssistant(false)}>
        <CModalTitle id="Undergraduate Learning Assistant">Undergraduate Learning Assistant</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CContainer class="text-center">
          <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>East Lansing, MI</CBadge>
          <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Remote</CBadge>
        </CContainer>
        <ul>
          <li>Course: CSE477 Web Application Architecture and Development</li>
          <li>Assisted in teaching frontend (HTML/CSS/JavaScript), backend (Python Flask), and databases (MySQL)</li>
          <li>Held office hours and responded to GitLab issues regarding course material for a class of 200 students</li>
        </ul>          
      </CModalBody>
      <CModalFooter>
        <CButton color="dark" onClick={() => setUndergraduateLearningAssistant(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>

    <CModal
      alignment="center"
      visible={StudentFrontendAssistant}
      onClose={() => setStudentFrontendAssistant(false)}
      aria-labelledby="Student Frontend Web Assistant"
    >
      <CModalHeader onClose={() => setStudentFrontendAssistant(false)}>
        <CModalTitle id="Student Frontend Web Assistant">Student Frontend Web Assistant</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CContainer class="text-center">
          <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>East Lansing, MI</CBadge>
          <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Hybrid</CBadge>
        </CContainer>
        <ul>
          <li>Supported the launch and future phases of engineering.msu.edu within Sitecore and Drupal CMS</li>
          <li>Updated page layouts and performed content migrations using HTML</li>
          <li>Ensured web pages and documents adhere to WCAG 2.0 guidelines</li>
        </ul>
      </CModalBody>
      <CModalFooter>
        <CButton color="dark" onClick={() => setStudentFrontendAssistant(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>

    <CModal
      alignment="center"
      visible={ITIntern}
      onClose={() => setITIntern(false)}
      aria-labelledby="IT Intern"
    >
      <CModalHeader onClose={() => setITIntern(false)}>
        <CModalTitle id="IT Intern">IT Intern</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CContainer class="text-center">
          <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Farmington Hils, MI</CBadge>
          <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Internship</CBadge>
        </CContainer>
        <ul>
          <li>Held appointments with staff, which led to the deployment of over 100 replacement laptops</li>
          <li>Provided Level 1 support in managing and resolving support tickets</li>
        </ul>
      </CModalBody>
      <CModalFooter>
        <CButton color="dark" onClick={() => setITIntern(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>

    <CContainer id="projects" style={{padding: '1rem', marginBottom: '15rem', scrollMarginTop: '70px'}}>
    <h2 style={{color: 'rgb(253, 134, 110)'}}>Projects</h2>
    <CNav variant="tabs" role="tablist">
      <CNavItem role="presentation">
        <CNavLink
          active={activeKey === 1}
          component="button"
          role="tab"
          aria-controls="web-tab-pane"
          aria-selected={activeKey === 1}
          onClick={() => setActiveKey(1)}
          style={{ color: activeKey === 1 ? 'rgb(253, 134, 110)' : 'rgba(44, 56, 74, 0.95)'}}
        >
          Web
        </CNavLink>
      </CNavItem>
      <CNavItem role="presentation">
        <CNavLink
          active={activeKey === 2}
          component="button"
          role="tab"
          aria-controls="software-tab-pane"
          aria-selected={activeKey === 2}
          onClick={() => setActiveKey(2)}
          style={{ color: activeKey === 2 ? 'rgb(253, 134, 110)' : 'rgba(44, 56, 74, 0.95)'}}
        >
          Software
        </CNavLink>
      </CNavItem>
      <CNavItem role="presentation">
        <CNavLink
          active={activeKey === 3}
          component="button"
          role="tab"
          aria-controls="misc-tab-pane"
          aria-selected={activeKey === 3}
          onClick={() => setActiveKey(3)}
          style={{ color: activeKey === 3 ? 'rgb(253, 134, 110)' : 'rgba(44, 56, 74, 0.95)'}}
        >
          Misc
        </CNavLink>
      </CNavItem>
    </CNav>
    <CTabContent>
      <CTabPane role="tabpanel" aria-labelledby="web-tab-pane" visible={activeKey === 1}>
        <CContainer style={{padding: '1rem'}}>
          <CCard>
          <CCardBody>
          <CCardTitle className="text-center">
            AuditBuddy
          </CCardTitle>
          <CCardText style={{textAlign: 'center'}}>
          <CBadge color="dark">Jan 2024 - May 2024</CBadge>
          </CCardText>
            <CCardText style={{textAlign: 'center'}}>
              <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>JavaScript</CBadge>
              <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>React.js</CBadge>
              <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>Firebase</CBadge>
              <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>YOLOv3</CBadge>
              <CBadge style={{backgroundColor: 'rgb(253, 134, 110)', margin: '0.25rem'}}>MUI</CBadge>
            </CCardText>

            <CContainer style={{ wordSpacing: '0.2em' }} sm={12} md={6}>
              <CRow className="align-items-center">
              <CCol sm={12} md={6}>
              <CContainer>
            <CCarousel controls indicators>
              <CCarouselItem>
                <CImage className="d-block w-100" src="/auditbuddy_ss1.png" alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src="/auditbuddy_ss2.png" alt="slide 2" />
              </CCarouselItem>
            </CCarousel>
            </CContainer>
              </CCol>
              <CCol sm={12} md={6}>
              <CCardText className="text-center">
              Created a web app to automate car dealership audits, ensuring strict compliance with industry standards. Auditors send media files to trained ML models for criteria detection. 
              Results and compliance scores are easily accessed via the database. As a result, auditor time efficiency improved by 83%.
              </CCardText>
              <CContainer className="text-center">
              <CButton color="dark" href="#">Learn more</CButton>
              </CContainer>
              </CCol>
              </CRow>
            </CContainer>
          </CCardBody>
          </CCard>
        </CContainer>
      </CTabPane>
      <CTabPane role="tabpanel" aria-labelledby="software-tab-pane" visible={activeKey === 2}>
       Software
      </CTabPane>
      <CTabPane role="tabpanel" aria-labelledby="misc-tab-pane" visible={activeKey === 3}>
        Misc
      </CTabPane>
    </CTabContent>
    </CContainer>
    </main>
  );
}
