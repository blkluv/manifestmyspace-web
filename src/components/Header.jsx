import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useUser } from '../contexts/UserContext';

function Header() {
    const { user, setUser } = useUser();
    const userRoles = user.roles;
    
    const navigate = useNavigate();

    // useEffect(() => {
    //   // Perform the initial navigation when the component mounts
    //   switch (user.selectedRole) {
    //     case 'Owner':
    //       navigate('/ownerDashboard');
    //       break;
    //     case 'Manager':
    //       navigate('/managerDashboard');
    //       break;
    //     case 'Tenant':
    //       navigate('/tenantDashboard');
    //       break;
    //     case 'Maintenance':
    //       navigate('/ownerDashboard');
    //       break;
    //     default:
    //       break;
    //   }
    // }, [user.selectedRole]);
  
    const handleButtonClick = (role) => {
      
      switch (role) {
        case 'Owner':
          navigate('/ownerDashboard');
          break;
        case 'Manager':
          navigate('/managerDashboard');
          break;
        case 'Tenant':
          navigate('/tenantDashboard');
          break;
        case 'Maintenance':
          navigate('/ownerDashboard');
          break;
        default:
          break;
      }
      // Update the user state with the selected role
      setUser((prevUser) => ({
        ...prevUser,
        selectedRole: role,
      }));
    };
  
  
    return (
        <>
            <div className="main-header">
                <div className="main-header-title-logo">
                    <div className="main-header-title-logo-container">
                        <svg width="199" height="44" viewBox="0 0 199 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M79.392 3.51215V4.23215C78.624 4.25615 78.036 4.35215 77.628 4.52015C77.22 4.66415 76.944 4.95214 76.8 5.38414C76.68 5.79214 76.62 6.44014 76.62 7.32814V25.1841C76.62 26.0481 76.692 26.6961 76.836 27.1281C76.98 27.5601 77.244 27.8481 77.628 27.9921C78.036 28.1361 78.624 28.2321 79.392 28.2801V29.0001C78.768 28.9521 77.976 28.9281 77.016 28.9281C76.056 28.9041 75.084 28.8921 74.1 28.8921C73.02 28.8921 72 28.9041 71.04 28.9281C70.104 28.9281 69.348 28.9521 68.772 29.0001V28.2801C69.588 28.2321 70.2 28.1361 70.608 27.9921C71.04 27.8481 71.328 27.5601 71.472 27.1281C71.616 26.6961 71.688 26.0481 71.688 25.1841V5.60015L71.94 5.63614L63.012 29.1081H62.436L52.932 5.81614V23.6721C52.932 24.8241 53.004 25.7241 53.148 26.3721C53.292 26.9961 53.604 27.4521 54.084 27.7401C54.588 28.0041 55.344 28.1841 56.352 28.2801V29.0001C55.896 28.9521 55.308 28.9281 54.588 28.9281C53.868 28.9041 53.184 28.8921 52.536 28.8921C51.96 28.8921 51.372 28.9041 50.772 28.9281C50.196 28.9281 49.716 28.9521 49.332 29.0001V28.2801C50.124 28.1841 50.712 28.0041 51.096 27.7401C51.504 27.4761 51.768 27.0441 51.888 26.4441C52.032 25.8441 52.104 25.0161 52.104 23.9601V7.32814C52.104 6.44014 52.032 5.79214 51.888 5.38414C51.768 4.95214 51.504 4.66415 51.096 4.52015C50.712 4.35215 50.124 4.25615 49.332 4.23215V3.51215C49.716 3.53614 50.196 3.56014 50.772 3.58414C51.372 3.60814 51.96 3.62014 52.536 3.62014C53.424 3.62014 54.288 3.60814 55.128 3.58414C55.968 3.56014 56.712 3.53614 57.36 3.51215L65.1 22.8441L64.308 23.4921L71.832 3.62014C72.192 3.62014 72.564 3.62014 72.948 3.62014C73.356 3.62014 73.74 3.62014 74.1 3.62014C75.084 3.62014 76.056 3.60814 77.016 3.58414C77.976 3.56014 78.768 3.53614 79.392 3.51215ZM86.4595 29.2521C85.4275 29.2521 84.5515 29.0601 83.8315 28.6761C83.1115 28.2681 82.5715 27.7281 82.2115 27.0561C81.8515 26.3601 81.6715 25.5921 81.6715 24.7521C81.6715 23.7201 81.9115 22.8801 82.3915 22.2321C82.8715 21.5601 83.4835 21.0321 84.2275 20.6481C84.9955 20.2401 85.7995 19.9041 86.6395 19.6401C87.4795 19.3521 88.2715 19.0881 89.0155 18.8481C89.7595 18.5841 90.3715 18.2841 90.8515 17.9481C91.3315 17.6121 91.5715 17.1681 91.5715 16.6161V13.9881C91.5715 13.2201 91.4515 12.5961 91.2115 12.1161C90.9955 11.6121 90.6595 11.2401 90.2035 11.0001C89.7715 10.7361 89.2195 10.6041 88.5475 10.6041C88.0435 10.6041 87.5155 10.6761 86.9635 10.8201C86.4115 10.9641 85.9555 11.2401 85.5955 11.6481C86.2195 11.8161 86.6995 12.1281 87.0355 12.5841C87.3955 13.0401 87.5755 13.5921 87.5755 14.2401C87.5755 14.9841 87.3235 15.5721 86.8195 16.0041C86.3395 16.4121 85.7275 16.6161 84.9835 16.6161C84.1915 16.6161 83.5915 16.3641 83.1835 15.8601C82.7755 15.3561 82.5715 14.7681 82.5715 14.0961C82.5715 13.4241 82.7395 12.8721 83.0755 12.4401C83.4115 11.9841 83.8795 11.5761 84.4795 11.2161C85.0795 10.8081 85.8475 10.4841 86.7835 10.2441C87.7195 10.0041 88.7395 9.88415 89.8435 9.88415C90.8995 9.88415 91.8355 10.0041 92.6515 10.2441C93.4675 10.4601 94.1635 10.8561 94.7395 11.4321C95.3155 11.9841 95.6875 12.6681 95.8555 13.4841C96.0235 14.3001 96.1075 15.2961 96.1075 16.4721V26.3361C96.1075 26.9361 96.1795 27.3681 96.3235 27.6321C96.4675 27.8721 96.6955 27.9921 97.0075 27.9921C97.2475 27.9921 97.4755 27.9321 97.6915 27.8121C97.9075 27.6921 98.1475 27.5241 98.4115 27.3081L98.8075 27.9201C98.2795 28.3281 97.7275 28.6521 97.1515 28.8921C96.5755 29.1321 95.8795 29.2521 95.0635 29.2521C94.2235 29.2521 93.5515 29.1321 93.0475 28.8921C92.5675 28.6521 92.2075 28.3041 91.9675 27.8481C91.7515 27.3921 91.6315 26.8521 91.6075 26.2281C91.0315 27.1881 90.3235 27.9321 89.4835 28.4601C88.6435 28.9881 87.6355 29.2521 86.4595 29.2521ZM88.6195 27.2361C89.1955 27.2361 89.7235 27.0801 90.2035 26.7681C90.7075 26.4561 91.1635 25.9881 91.5715 25.3641V18.0921C91.3315 18.4521 90.9835 18.7761 90.5275 19.0641C90.0955 19.3521 89.6275 19.6401 89.1235 19.9281C88.6195 20.2161 88.1395 20.5521 87.6835 20.9361C87.2515 21.2961 86.8795 21.7521 86.5675 22.3041C86.2795 22.8321 86.1355 23.5161 86.1355 24.3561C86.1355 25.2921 86.3635 26.0121 86.8195 26.5161C87.2755 26.9961 87.8755 27.2361 88.6195 27.2361ZM112.766 9.88415C113.774 9.88415 114.578 10.0161 115.178 10.2801C115.802 10.5441 116.306 10.8801 116.69 11.2881C117.122 11.7441 117.422 12.3321 117.59 13.0521C117.782 13.7721 117.878 14.7441 117.878 15.9681V25.6521C117.878 26.6601 118.058 27.3441 118.418 27.7041C118.802 28.0641 119.438 28.2441 120.326 28.2441V29.0001C119.894 28.9761 119.222 28.9521 118.31 28.9281C117.422 28.8801 116.558 28.8561 115.718 28.8561C114.83 28.8561 113.966 28.8801 113.126 28.9281C112.286 28.9521 111.662 28.9761 111.254 29.0001V28.2441C112.022 28.2441 112.562 28.0641 112.874 27.7041C113.186 27.3441 113.342 26.6601 113.342 25.6521V14.7441C113.342 14.0961 113.282 13.5201 113.162 13.0161C113.042 12.4881 112.802 12.0801 112.442 11.7921C112.082 11.4801 111.566 11.3241 110.894 11.3241C110.102 11.3241 109.394 11.5401 108.77 11.9721C108.17 12.4041 107.69 13.0041 107.33 13.7721C106.994 14.5161 106.826 15.3561 106.826 16.2921V25.6521C106.826 26.6601 106.982 27.3441 107.294 27.7041C107.606 28.0641 108.146 28.2441 108.914 28.2441V29.0001C108.506 28.9761 107.894 28.9521 107.078 28.9281C106.262 28.8801 105.434 28.8561 104.594 28.8561C103.706 28.8561 102.806 28.8801 101.894 28.9281C100.982 28.9521 100.298 28.9761 99.8423 29.0001V28.2441C100.73 28.2441 101.354 28.0641 101.714 27.7041C102.098 27.3441 102.29 26.6601 102.29 25.6521V14.3121C102.29 13.2321 102.11 12.4401 101.75 11.9361C101.414 11.4081 100.778 11.1441 99.8423 11.1441V10.3881C100.61 10.4601 101.354 10.4961 102.074 10.4961C102.962 10.4961 103.802 10.4601 104.594 10.3881C105.41 10.2921 106.154 10.1601 106.826 9.99215V13.5921C107.426 12.2241 108.254 11.2641 109.31 10.7121C110.366 10.1601 111.518 9.88415 112.766 9.88415ZM126.209 1.20815C127.073 1.20815 127.781 1.44815 128.333 1.92815C128.885 2.40815 129.161 3.04415 129.161 3.83615C129.161 4.62815 128.885 5.26415 128.333 5.74415C127.781 6.22415 127.073 6.46415 126.209 6.46415C125.345 6.46415 124.637 6.22415 124.085 5.74415C123.533 5.26415 123.257 4.62815 123.257 3.83615C123.257 3.04415 123.533 2.40815 124.085 1.92815C124.637 1.44815 125.345 1.20815 126.209 1.20815ZM128.729 9.99215V25.6521C128.729 26.6601 128.909 27.3441 129.269 27.7041C129.653 28.0641 130.289 28.2441 131.177 28.2441V29.0001C130.745 28.9761 130.085 28.9521 129.197 28.9281C128.309 28.8801 127.409 28.8561 126.497 28.8561C125.609 28.8561 124.709 28.8801 123.797 28.9281C122.885 28.9521 122.201 28.9761 121.745 29.0001V28.2441C122.633 28.2441 123.257 28.0641 123.617 27.7041C124.001 27.3441 124.193 26.6601 124.193 25.6521V14.3481C124.193 13.2441 124.013 12.4401 123.653 11.9361C123.317 11.4081 122.681 11.1441 121.745 11.1441V10.3881C122.513 10.4601 123.257 10.4961 123.977 10.4961C124.865 10.4961 125.705 10.4601 126.497 10.3881C127.313 10.2921 128.057 10.1601 128.729 9.99215ZM142.107 0.848145C142.899 0.848145 143.583 0.956145 144.159 1.17214C144.759 1.36414 145.275 1.62814 145.707 1.96414C146.067 2.25214 146.355 2.61214 146.571 3.04414C146.811 3.47614 146.931 3.95615 146.931 4.48415C146.931 5.13214 146.703 5.68414 146.247 6.14014C145.815 6.59614 145.263 6.82414 144.591 6.82414C143.871 6.82414 143.271 6.62014 142.791 6.21214C142.335 5.78014 142.107 5.19214 142.107 4.44814C142.107 3.87214 142.263 3.38015 142.575 2.97215C142.911 2.54015 143.379 2.24014 143.979 2.07214C143.907 1.90414 143.751 1.76015 143.511 1.64015C143.271 1.52015 142.947 1.46014 142.539 1.46014C142.059 1.46014 141.639 1.55615 141.279 1.74815C140.943 1.94015 140.667 2.20414 140.451 2.54014C140.211 2.94814 140.043 3.54815 139.947 4.34015C139.851 5.13214 139.803 6.33215 139.803 7.94015V10.4241H143.655V11.1441H139.803V25.2921C139.803 26.4681 140.115 27.2601 140.739 27.6681C141.387 28.0521 142.251 28.2441 143.331 28.2441V29.0001C142.731 28.9761 141.891 28.9521 140.811 28.9281C139.731 28.8801 138.579 28.8561 137.355 28.8561C136.491 28.8561 135.627 28.8801 134.763 28.9281C133.899 28.9521 133.251 28.9761 132.819 29.0001V28.2441C133.707 28.2441 134.331 28.0641 134.691 27.7041C135.075 27.3441 135.267 26.6601 135.267 25.6521V11.1441H132.675V10.4241H135.267C135.267 9.00814 135.339 7.83214 135.483 6.89614C135.627 5.93614 135.843 5.12014 136.131 4.44814C136.443 3.77614 136.863 3.17614 137.391 2.64814C137.895 2.12014 138.555 1.68815 139.371 1.35215C140.211 1.01615 141.123 0.848145 142.107 0.848145ZM153.668 9.88415C155.78 9.88415 157.436 10.5201 158.636 11.7921C159.836 13.0641 160.436 15.0921 160.436 17.8761H148.304L148.268 17.1921H156.26C156.308 16.0161 156.236 14.9361 156.044 13.9521C155.852 12.9441 155.54 12.1401 155.108 11.5401C154.7 10.9401 154.16 10.6401 153.488 10.6401C152.576 10.6401 151.784 11.1801 151.112 12.2601C150.44 13.3161 150.02 15.0561 149.852 17.4801L149.996 17.6961C149.948 18.0081 149.912 18.3441 149.888 18.7041C149.888 19.0641 149.888 19.4241 149.888 19.7841C149.888 21.4401 150.128 22.8081 150.608 23.8881C151.088 24.9681 151.712 25.7601 152.48 26.2641C153.248 26.7681 154.04 27.0201 154.856 27.0201C155.408 27.0201 155.972 26.9361 156.548 26.7681C157.124 26.6001 157.688 26.2881 158.24 25.8321C158.792 25.3761 159.296 24.7281 159.752 23.8881L160.436 24.1761C160.172 25.0161 159.728 25.8561 159.104 26.6961C158.504 27.5121 157.724 28.1841 156.764 28.7121C155.804 29.2401 154.676 29.5041 153.38 29.5041C151.748 29.5041 150.308 29.1441 149.06 28.4241C147.812 27.7041 146.84 26.6361 146.144 25.2201C145.448 23.7801 145.1 22.0281 145.1 19.9641C145.1 17.7801 145.46 15.9441 146.18 14.4561C146.924 12.9681 147.944 11.8401 149.24 11.0721C150.536 10.2801 152.012 9.88415 153.668 9.88415ZM169.648 9.88415C170.656 9.88415 171.52 10.0281 172.24 10.3161C172.96 10.6041 173.488 10.8561 173.824 11.0721C174.64 11.6721 175.132 11.2881 175.3 9.92015H176.092C176.044 10.6161 176.008 11.4441 175.984 12.4041C175.96 13.3401 175.948 14.6001 175.948 16.1841H175.156C175.036 15.2961 174.808 14.4321 174.472 13.5921C174.136 12.7521 173.644 12.0561 172.996 11.5041C172.348 10.9281 171.496 10.6401 170.44 10.6401C169.696 10.6401 169.072 10.8561 168.568 11.2881C168.088 11.7201 167.848 12.3321 167.848 13.1241C167.848 13.8441 168.064 14.4801 168.496 15.0321C168.928 15.5601 169.48 16.0641 170.152 16.5441C170.848 17.0001 171.568 17.5041 172.312 18.0561C173.176 18.6321 173.944 19.2201 174.616 19.8201C175.288 20.3961 175.828 21.0441 176.236 21.7641C176.644 22.4601 176.848 23.2881 176.848 24.2481C176.848 25.3521 176.536 26.3001 175.912 27.0921C175.312 27.8601 174.508 28.4601 173.5 28.8921C172.516 29.3001 171.424 29.5041 170.224 29.5041C169.576 29.5041 168.988 29.4441 168.46 29.3241C167.932 29.2041 167.464 29.0481 167.056 28.8561C166.744 28.6881 166.456 28.5321 166.192 28.3881C165.952 28.2441 165.7 28.1241 165.436 28.0281C165.196 27.9081 164.98 27.9561 164.788 28.1721C164.62 28.3881 164.488 28.7481 164.392 29.2521H163.6C163.648 28.4841 163.684 27.5481 163.708 26.4441C163.732 25.3401 163.744 23.8761 163.744 22.0521H164.536C164.704 23.3721 164.956 24.5361 165.292 25.5441C165.652 26.5281 166.168 27.3081 166.84 27.8841C167.512 28.4361 168.376 28.7121 169.432 28.7121C169.888 28.7121 170.32 28.6161 170.728 28.4241C171.16 28.2321 171.508 27.9321 171.772 27.5241C172.06 27.1161 172.204 26.5641 172.204 25.8681C172.204 24.8121 171.844 23.9361 171.124 23.2401C170.404 22.5441 169.504 21.8001 168.424 21.0081C167.608 20.4081 166.84 19.8201 166.12 19.2441C165.424 18.6681 164.848 18.0201 164.392 17.3001C163.96 16.5801 163.744 15.7281 163.744 14.7441C163.744 13.6641 164.02 12.7761 164.572 12.0801C165.124 11.3601 165.844 10.8201 166.732 10.4601C167.644 10.0761 168.616 9.88415 169.648 9.88415ZM186.029 4.48415V10.4241H190.637V11.1441H186.029V25.4721C186.029 26.3361 186.185 26.9481 186.497 27.3081C186.809 27.6681 187.253 27.8481 187.829 27.8481C188.381 27.8481 188.885 27.6441 189.341 27.2361C189.797 26.8041 190.205 26.0961 190.565 25.1121L191.213 25.4001C190.853 26.5761 190.289 27.5601 189.521 28.3521C188.777 29.1201 187.721 29.5041 186.353 29.5041C185.537 29.5041 184.841 29.3961 184.265 29.1801C183.713 28.9881 183.233 28.7001 182.825 28.3161C182.297 27.7641 181.937 27.1041 181.745 26.3361C181.577 25.5681 181.493 24.5481 181.493 23.2761V11.1441H178.325V10.4241H181.493V5.42015C182.357 5.39614 183.161 5.31215 183.905 5.16815C184.649 5.02415 185.357 4.79615 186.029 4.48415Z" fill="#F2F2F2" />
                            <path d="M48.8999 42.9998V36.4398H50.8499C51.2966 36.4398 51.6866 36.4931 52.0199 36.5998C52.3599 36.7065 52.6232 36.8765 52.8099 37.1098C53.0032 37.3431 53.0999 37.6531 53.0999 38.0398C53.0999 38.3665 53.0166 38.6631 52.8499 38.9298C52.6899 39.1898 52.4532 39.3698 52.1399 39.4698V39.5098C52.5332 39.5831 52.8532 39.7498 53.0999 40.0098C53.3532 40.2698 53.4799 40.6265 53.4799 41.0798C53.4799 41.5065 53.3732 41.8631 53.1599 42.1498C52.9532 42.4365 52.6632 42.6498 52.2899 42.7898C51.9166 42.9298 51.4832 42.9998 50.9899 42.9998H48.8999ZM49.7299 39.2298H50.6999C51.2599 39.2298 51.6632 39.1331 51.9099 38.9398C52.1566 38.7465 52.2799 38.4831 52.2799 38.1498C52.2799 37.7698 52.1499 37.4998 51.8899 37.3398C51.6366 37.1798 51.2532 37.0998 50.7399 37.0998H49.7299V39.2298ZM49.7299 42.3398H50.8699C51.4366 42.3398 51.8766 42.2365 52.1899 42.0298C52.5032 41.8165 52.6599 41.4898 52.6599 41.0498C52.6599 40.6431 52.5032 40.3465 52.1899 40.1598C51.8832 39.9665 51.4432 39.8698 50.8699 39.8698H49.7299V42.3398ZM57.1088 43.1198C56.6621 43.1198 56.2588 43.0298 55.8988 42.8498C55.5455 42.6698 55.2655 42.3731 55.0588 41.9598C54.8521 41.5465 54.7488 40.9898 54.7488 40.2898V36.4398H55.5788V40.3098C55.5788 40.8365 55.6455 41.2531 55.7788 41.5598C55.9188 41.8598 56.1021 42.0731 56.3288 42.1998C56.5621 42.3265 56.8221 42.3898 57.1088 42.3898C57.4021 42.3898 57.6655 42.3265 57.8988 42.1998C58.1321 42.0731 58.3155 41.8598 58.4488 41.5598C58.5888 41.2531 58.6588 40.8365 58.6588 40.3098V36.4398H59.4588V40.2898C59.4588 40.9898 59.3555 41.5465 59.1488 41.9598C58.9421 42.3731 58.6621 42.6698 58.3088 42.8498C57.9555 43.0298 57.5555 43.1198 57.1088 43.1198ZM62.1474 42.9998V40.4598L60.1774 36.4398H61.0674L61.9174 38.2898C62.0241 38.5298 62.1274 38.7665 62.2274 38.9998C62.3341 39.2331 62.4407 39.4731 62.5474 39.7198H62.5874C62.7007 39.4731 62.8141 39.2331 62.9274 38.9998C63.0407 38.7665 63.1474 38.5298 63.2474 38.2898L64.0874 36.4398H64.9574L62.9874 40.4598V42.9998H62.1474ZM65.2851 43.1198C65.1184 43.1198 64.9751 43.0631 64.8551 42.9498C64.7417 42.8298 64.6851 42.6798 64.6851 42.4998C64.6851 42.3065 64.7417 42.1531 64.8551 42.0398C64.9751 41.9198 65.1184 41.8598 65.2851 41.8598C65.4451 41.8598 65.5817 41.9198 65.6951 42.0398C65.8151 42.1531 65.8751 42.3065 65.8751 42.4998C65.8751 42.6798 65.8151 42.8298 65.6951 42.9498C65.5817 43.0631 65.4451 43.1198 65.2851 43.1198ZM71.2472 43.1198C70.7872 43.1198 70.3606 43.0331 69.9672 42.8598C69.5739 42.6798 69.2339 42.4431 68.9472 42.1498L69.4472 41.5698C69.6806 41.8165 69.9539 42.0165 70.2672 42.1698C70.5872 42.3165 70.9172 42.3898 71.2572 42.3898C71.6906 42.3898 72.0272 42.2931 72.2672 42.0998C72.5072 41.8998 72.6272 41.6398 72.6272 41.3198C72.6272 41.0931 72.5772 40.9131 72.4772 40.7798C72.3839 40.6465 72.2539 40.5331 72.0872 40.4398C71.9272 40.3465 71.7439 40.2531 71.5372 40.1598L70.5972 39.7498C70.3906 39.6631 70.1839 39.5498 69.9772 39.4098C69.7772 39.2698 69.6072 39.0898 69.4672 38.8698C69.3339 38.6498 69.2672 38.3798 69.2672 38.0598C69.2672 37.7265 69.3539 37.4298 69.5272 37.1698C69.7072 36.9031 69.9539 36.6965 70.2672 36.5498C70.5806 36.3965 70.9339 36.3198 71.3272 36.3198C71.7206 36.3198 72.0839 36.3965 72.4172 36.5498C72.7506 36.6965 73.0339 36.8898 73.2672 37.1298L72.8172 37.6698C72.6172 37.4765 72.3939 37.3265 72.1472 37.2198C71.9072 37.1065 71.6339 37.0498 71.3272 37.0498C70.9606 37.0498 70.6639 37.1365 70.4372 37.3098C70.2172 37.4831 70.1072 37.7165 70.1072 38.0098C70.1072 38.2165 70.1606 38.3898 70.2672 38.5298C70.3806 38.6631 70.5206 38.7731 70.6872 38.8598C70.8539 38.9465 71.0239 39.0265 71.1972 39.0998L72.1272 39.4998C72.3806 39.6065 72.6072 39.7365 72.8072 39.8898C73.0139 40.0365 73.1772 40.2198 73.2972 40.4398C73.4172 40.6531 73.4772 40.9231 73.4772 41.2498C73.4772 41.5965 73.3872 41.9131 73.2072 42.1998C73.0272 42.4798 72.7706 42.7031 72.4372 42.8698C72.1039 43.0365 71.7072 43.1198 71.2472 43.1198ZM74.769 42.9998V36.4398H78.549V37.1398H75.599V39.1998H78.089V39.9098H75.599V42.2898H78.649V42.9998H74.769ZM80.0425 42.9998V36.4398H80.8725V42.2898H83.7425V42.9998H80.0425ZM84.9058 42.9998V36.4398H85.7358V42.2898H88.6058V42.9998H84.9058ZM90.119 43.1198C89.9524 43.1198 89.809 43.0631 89.689 42.9498C89.5757 42.8298 89.519 42.6798 89.519 42.4998C89.519 42.3065 89.5757 42.1531 89.689 42.0398C89.809 41.9198 89.9524 41.8598 90.119 41.8598C90.279 41.8598 90.4157 41.9198 90.529 42.0398C90.649 42.1531 90.709 42.3065 90.709 42.4998C90.709 42.6798 90.649 42.8298 90.529 42.9498C90.4157 43.0631 90.279 43.1198 90.119 43.1198ZM94.2612 42.9998V36.4398H96.3112C96.7579 36.4398 97.1546 36.4998 97.5012 36.6198C97.8479 36.7331 98.1179 36.9265 98.3112 37.1998C98.5112 37.4665 98.6112 37.8265 98.6112 38.2798C98.6112 38.7865 98.4779 39.1965 98.2112 39.5098C97.9446 39.8165 97.5846 40.0265 97.1312 40.1398L98.8012 42.9998H97.8612L96.2812 40.2298H95.0912V42.9998H94.2612ZM95.0912 39.5498H96.1912C96.7046 39.5498 97.0979 39.4465 97.3712 39.2398C97.6446 39.0265 97.7812 38.7065 97.7812 38.2798C97.7812 37.8465 97.6446 37.5431 97.3712 37.3698C97.0979 37.1965 96.7046 37.1098 96.1912 37.1098H95.0912V39.5498ZM99.9546 42.9998V36.4398H103.735V37.1398H100.785V39.1998H103.275V39.9098H100.785V42.2898H103.835V42.9998H99.9546ZM105.228 42.9998V36.4398H106.088L108.458 40.5598L109.168 41.9198H109.208C109.188 41.5865 109.165 41.2431 109.138 40.8898C109.118 40.5298 109.108 40.1765 109.108 39.8298V36.4398H109.898V42.9998H109.038L106.658 38.8698L105.948 37.5198H105.908C105.935 37.8465 105.958 38.1831 105.978 38.5298C106.005 38.8765 106.018 39.2231 106.018 39.5698V42.9998H105.228ZM113.063 42.9998V37.1398H111.083V36.4398H115.883V37.1398H113.903V42.9998H113.063ZM116.35 43.1198C116.183 43.1198 116.04 43.0631 115.92 42.9498C115.806 42.8298 115.75 42.6798 115.75 42.4998C115.75 42.3065 115.806 42.1531 115.92 42.0398C116.04 41.9198 116.183 41.8598 116.35 41.8598C116.51 41.8598 116.646 41.9198 116.76 42.0398C116.88 42.1531 116.94 42.3065 116.94 42.4998C116.94 42.6798 116.88 42.8298 116.76 42.9498C116.646 43.0631 116.51 43.1198 116.35 43.1198ZM120.492 42.9998V36.4398H121.492L122.752 39.9398C122.832 40.1665 122.908 40.3965 122.982 40.6298C123.062 40.8565 123.142 41.0831 123.222 41.3098H123.262C123.342 41.0831 123.415 40.8565 123.482 40.6298C123.555 40.3965 123.632 40.1665 123.712 39.9398L124.952 36.4398H125.962V42.9998H125.182V39.3898C125.182 39.0965 125.195 38.7731 125.222 38.4198C125.248 38.0598 125.272 37.7365 125.292 37.4498H125.252L124.732 38.9398L123.492 42.3398H122.942L121.702 38.9398L121.182 37.4498H121.142C121.162 37.7365 121.182 38.0598 121.202 38.4198C121.228 38.7731 121.242 39.0965 121.242 39.3898V42.9998H120.492ZM128.887 39.3298L128.577 40.3298H130.547L130.237 39.3298C130.117 38.9631 130.004 38.5998 129.897 38.2398C129.791 37.8731 129.684 37.4998 129.577 37.1198H129.537C129.437 37.4998 129.334 37.8731 129.227 38.2398C129.121 38.5998 129.007 38.9631 128.887 39.3298ZM126.887 42.9998L129.107 36.4398H130.047L132.267 42.9998H131.377L130.757 40.9998H128.367L127.737 42.9998H126.887ZM133.197 42.9998V36.4398H134.057L136.427 40.5598L137.137 41.9198H137.177C137.157 41.5865 137.134 41.2431 137.107 40.8898C137.087 40.5298 137.077 40.1765 137.077 39.8298V36.4398H137.867V42.9998H137.007L134.627 38.8698L133.917 37.5198H133.877C133.904 37.8465 133.927 38.1831 133.947 38.5298C133.974 38.8765 133.987 39.2231 133.987 39.5698V42.9998H133.197ZM140.801 39.3298L140.491 40.3298H142.461L142.151 39.3298C142.031 38.9631 141.918 38.5998 141.811 38.2398C141.705 37.8731 141.598 37.4998 141.491 37.1198H141.451C141.351 37.4998 141.248 37.8731 141.141 38.2398C141.035 38.5998 140.921 38.9631 140.801 39.3298ZM138.801 42.9998L141.021 36.4398H141.961L144.181 42.9998H143.291L142.671 40.9998H140.281L139.651 42.9998H138.801ZM147.593 43.1198C147.02 43.1198 146.51 42.9865 146.063 42.7198C145.617 42.4465 145.267 42.0565 145.013 41.5498C144.76 41.0431 144.633 40.4331 144.633 39.7198C144.633 39.0131 144.763 38.4065 145.023 37.8998C145.283 37.3931 145.64 37.0031 146.093 36.7298C146.547 36.4565 147.063 36.3198 147.643 36.3198C148.097 36.3198 148.477 36.4065 148.783 36.5798C149.097 36.7465 149.347 36.9298 149.533 37.1298L149.073 37.6698C148.907 37.4965 148.713 37.3498 148.493 37.2298C148.273 37.1098 147.997 37.0498 147.663 37.0498C147.223 37.0498 146.84 37.1598 146.513 37.3798C146.187 37.5931 145.933 37.8965 145.753 38.2898C145.58 38.6831 145.493 39.1531 145.493 39.6998C145.493 40.5265 145.68 41.1831 146.053 41.6698C146.433 42.1498 146.973 42.3898 147.673 42.3898C147.907 42.3898 148.13 42.3565 148.343 42.2898C148.557 42.2165 148.727 42.1198 148.853 41.9998V40.2898H147.463V39.5998H149.613V42.3598C149.407 42.5798 149.127 42.7631 148.773 42.9098C148.427 43.0498 148.033 43.1198 147.593 43.1198ZM151.185 42.9998V36.4398H154.965V37.1398H152.015V39.1998H154.505V39.9098H152.015V42.2898H155.065V42.9998H151.185ZM156.809 43.1198C156.642 43.1198 156.499 43.0631 156.379 42.9498C156.265 42.8298 156.209 42.6798 156.209 42.4998C156.209 42.3065 156.265 42.1531 156.379 42.0398C156.499 41.9198 156.642 41.8598 156.809 41.8598C156.969 41.8598 157.105 41.9198 157.219 42.0398C157.339 42.1531 157.399 42.3065 157.399 42.4998C157.399 42.6798 157.339 42.8298 157.219 42.9498C157.105 43.0631 156.969 43.1198 156.809 43.1198ZM160.951 42.9998V36.4398H164.731V37.1398H161.781V39.3598H164.281V40.0598H161.781V42.9998H160.951ZM165.892 42.9998V36.4398H166.722V42.9998H165.892ZM168.519 42.9998V36.4398H169.379L171.749 40.5598L172.459 41.9198H172.499C172.479 41.5865 172.456 41.2431 172.429 40.8898C172.409 40.5298 172.399 40.1765 172.399 39.8298V36.4398H173.189V42.9998H172.329L169.949 38.8698L169.239 37.5198H169.199C169.226 37.8465 169.249 38.1831 169.269 38.5298C169.296 38.8765 169.309 39.2231 169.309 39.5698V42.9998H168.519ZM176.124 39.3298L175.814 40.3298H177.784L177.474 39.3298C177.354 38.9631 177.24 38.5998 177.134 38.2398C177.027 37.8731 176.92 37.4998 176.814 37.1198H176.774C176.674 37.4998 176.57 37.8731 176.464 38.2398C176.357 38.5998 176.244 38.9631 176.124 39.3298ZM174.124 42.9998L176.344 36.4398H177.284L179.504 42.9998H178.614L177.994 40.9998H175.604L174.974 42.9998H174.124ZM180.433 42.9998V36.4398H181.293L183.663 40.5598L184.373 41.9198H184.413C184.393 41.5865 184.37 41.2431 184.343 40.8898C184.323 40.5298 184.313 40.1765 184.313 39.8298V36.4398H185.103V42.9998H184.243L181.863 38.8698L181.153 37.5198H181.113C181.14 37.8465 181.163 38.1831 181.183 38.5298C181.21 38.8765 181.223 39.2231 181.223 39.5698V42.9998H180.433ZM189.388 43.1198C188.841 43.1198 188.351 42.9865 187.918 42.7198C187.491 42.4465 187.151 42.0565 186.898 41.5498C186.651 41.0431 186.528 40.4331 186.528 39.7198C186.528 39.0131 186.654 38.4065 186.908 37.8998C187.161 37.3931 187.508 37.0031 187.948 36.7298C188.388 36.4565 188.884 36.3198 189.438 36.3198C189.838 36.3198 190.191 36.4031 190.498 36.5698C190.804 36.7298 191.051 36.9165 191.238 37.1298L190.788 37.6698C190.614 37.4831 190.418 37.3331 190.198 37.2198C189.978 37.1065 189.728 37.0498 189.448 37.0498C189.034 37.0498 188.671 37.1598 188.358 37.3798C188.051 37.5931 187.811 37.8965 187.638 38.2898C187.471 38.6831 187.388 39.1531 187.388 39.6998C187.388 40.2465 187.471 40.7231 187.638 41.1298C187.804 41.5298 188.038 41.8398 188.338 42.0598C188.644 42.2798 189.004 42.3898 189.418 42.3898C189.731 42.3898 190.011 42.3231 190.258 42.1898C190.504 42.0565 190.731 41.8765 190.938 41.6498L191.398 42.1698C191.138 42.4698 190.844 42.7031 190.518 42.8698C190.191 43.0365 189.814 43.1198 189.388 43.1198ZM192.621 42.9998V36.4398H196.401V37.1398H193.451V39.1998H195.941V39.9098H193.451V42.2898H196.501V42.9998H192.621ZM198.244 43.1198C198.077 43.1198 197.934 43.0631 197.814 42.9498C197.701 42.8298 197.644 42.6798 197.644 42.4998C197.644 42.3065 197.701 42.1531 197.814 42.0398C197.934 41.9198 198.077 41.8598 198.244 41.8598C198.404 41.8598 198.541 41.9198 198.654 42.0398C198.774 42.1531 198.834 42.3065 198.834 42.4998C198.834 42.6798 198.774 42.8298 198.654 42.9498C198.541 43.0631 198.404 43.1198 198.244 43.1198Z" fill="#F2F2F2" />
                            <path d="M18.8734 3.0059L0.799805 20.7671L5.28553 25.1756L23.3592 7.41437L18.8734 3.0059Z" stroke="#F2F2F2" />
                            <path d="M29.4452 1.52837L11.3716 19.2896L15.8573 23.698L33.9309 5.93683L29.4452 1.52837Z" stroke="#F2F2F2" />
                            <path d="M27.8116 12.1174L9.74023 29.8809L14.2265 34.2888L32.2979 16.5253L27.8116 12.1174Z" stroke="#F2F2F2" />
                            <path d="M38.6654 10.6026L20.5918 28.3638L25.0775 32.7722L43.1511 15.011L38.6654 10.6026Z" stroke="#F2F2F2" />
                            <path d="M36.8895 21.1148L18.8159 38.876L23.3016 43.2844L41.3753 25.5233L36.8895 21.1148Z" stroke="#F2F2F2" />
                        </svg>

                    </div>
                </div>
                
                <AppBar position="static" style={{ backgroundColor: '#3D5CAC' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
                    {userRoles.map((role, index) => (
                    <Button
                    key={role}
                    color="inherit"
                    style={{
                      fontWeight: user.selectedRole === role ? 800 : 300,
                      fontSize: '16px',
                      fontFamily: 'Source Sans 3, sans-serif',
                      margin: '0 10px',
                      textTransform: 'none',
                    }}
                    onClick={() => handleButtonClick(role)}
                  >
                    {role}
                  </Button>
                    ))}
                </Toolbar>
                </AppBar>

            </div>
        </>
    )
}

export default Header;