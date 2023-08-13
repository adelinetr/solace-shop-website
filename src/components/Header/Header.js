import './Header.scss'
import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Header({activePage}) {

        const [isScrolled, setIsScrolled] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false)
      
        useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 10) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

        const isHomeOrWomensClothes = activePage === './' || activePage === './womens-clothes';

        const toggleMenu = () => {
          
          setIsMenuOpen(!isMenuOpen)
          //alert(isMenuOpen)
        }

        
    return(   
        <div className={`header ${isScrolled ? 'scroll' : ''}`}>
            <nav className={`navbar ${isHomeOrWomensClothes ? 'white-links' : 'black-links'}`}>
                <div className='mobile-logo'>
                    <svg width="147" height="47" viewBox="0 0 157 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.774 13.398C14.96 12.98 14.069 12.617 13.101 12.309C12.133 12.001 11.187 11.847 10.263 11.847C8.987 11.847 7.964 12.144 7.194 12.738C6.446 13.332 6.072 14.124 6.072 15.114C6.072 15.862 6.314 16.5 6.798 17.028C7.282 17.534 7.92 17.974 8.712 18.348C9.504 18.722 10.329 19.074 11.187 19.404C11.935 19.69 12.672 20.009 13.398 20.361C14.124 20.713 14.773 21.153 15.345 21.681C15.939 22.209 16.401 22.858 16.731 23.628C17.083 24.398 17.259 25.355 17.259 26.499C17.259 27.753 16.94 28.897 16.302 29.931C15.686 30.965 14.795 31.779 13.629 32.373C12.463 32.967 11.077 33.264 9.471 33.264C8.415 33.264 7.403 33.143 6.435 32.901C5.489 32.659 4.609 32.351 3.795 31.977C2.981 31.581 2.255 31.174 1.617 30.756L3.036 28.248C3.564 28.622 4.169 28.985 4.851 29.337C5.533 29.667 6.248 29.942 6.996 30.162C7.744 30.36 8.47 30.459 9.174 30.459C9.922 30.459 10.659 30.327 11.385 30.063C12.133 29.777 12.749 29.348 13.233 28.776C13.717 28.204 13.959 27.445 13.959 26.499C13.959 25.685 13.739 25.014 13.299 24.486C12.881 23.936 12.32 23.474 11.616 23.1C10.912 22.704 10.164 22.352 9.372 22.044C8.624 21.758 7.865 21.45 7.095 21.12C6.325 20.768 5.61 20.35 4.95 19.866C4.29 19.36 3.762 18.744 3.366 18.018C2.97 17.292 2.772 16.412 2.772 15.378C2.772 14.124 3.069 13.035 3.663 12.111C4.279 11.165 5.115 10.428 6.171 9.9C7.227 9.35 8.437 9.053 9.801 9.009C11.341 9.009 12.694 9.196 13.86 9.57C15.048 9.944 16.093 10.406 16.995 10.956L15.774 13.398ZM25.609 21.087C25.609 19.437 25.917 17.886 26.533 16.434C27.171 14.96 28.051 13.662 29.173 12.54C30.295 11.396 31.582 10.505 33.034 9.867C34.508 9.207 36.092 8.877 37.786 8.877C39.458 8.877 41.02 9.207 42.472 9.867C43.946 10.505 45.244 11.396 46.366 12.54C47.51 13.662 48.401 14.96 49.039 16.434C49.677 17.886 49.996 19.437 49.996 21.087C49.996 22.781 49.677 24.365 49.039 25.839C48.401 27.313 47.51 28.611 46.366 29.733C45.244 30.833 43.946 31.702 42.472 32.34C41.02 32.956 39.458 33.264 37.786 33.264C36.092 33.264 34.508 32.956 33.034 32.34C31.582 31.724 30.295 30.866 29.173 29.766C28.051 28.666 27.171 27.379 26.533 25.905C25.917 24.431 25.609 22.825 25.609 21.087ZM28.909 21.12C28.909 22.374 29.14 23.551 29.602 24.651C30.064 25.729 30.702 26.686 31.516 27.522C32.33 28.358 33.276 29.018 34.354 29.502C35.432 29.964 36.598 30.195 37.852 30.195C39.084 30.195 40.239 29.964 41.317 29.502C42.395 29.018 43.33 28.358 44.122 27.522C44.914 26.686 45.541 25.729 46.003 24.651C46.465 23.551 46.696 22.363 46.696 21.087C46.696 19.833 46.465 18.656 46.003 17.556C45.541 16.434 44.903 15.455 44.089 14.619C43.275 13.783 42.329 13.134 41.251 12.672C40.173 12.188 39.018 11.946 37.786 11.946C36.532 11.946 35.366 12.188 34.288 12.672C33.21 13.156 32.264 13.816 31.45 14.652C30.636 15.488 30.009 16.467 29.569 17.589C29.129 18.689 28.909 19.866 28.909 21.12ZM59.844 9.141H63.045V29.931H75.156V33H59.844V9.141ZM82.4513 33L92.8793 8.151H93.0773L103.472 33H99.8093L92.0213 13.167L94.2983 11.682L85.5863 33H82.4513ZM88.5563 23.958H97.4333L98.4893 26.73H87.6323L88.5563 23.958ZM128.655 31.218C128.259 31.482 127.72 31.779 127.038 32.109C126.356 32.439 125.553 32.714 124.629 32.934C123.727 33.154 122.737 33.264 121.659 33.264C119.811 33.242 118.139 32.912 116.643 32.274C115.169 31.636 113.915 30.767 112.881 29.667C111.847 28.567 111.044 27.302 110.472 25.872C109.922 24.42 109.647 22.88 109.647 21.252C109.647 19.47 109.933 17.831 110.505 16.335C111.099 14.817 111.924 13.508 112.98 12.408C114.036 11.286 115.279 10.417 116.709 9.801C118.161 9.185 119.745 8.877 121.461 8.877C122.891 8.877 124.189 9.075 125.355 9.471C126.521 9.845 127.522 10.296 128.358 10.824L127.071 13.794C126.411 13.354 125.608 12.936 124.662 12.54C123.738 12.144 122.704 11.946 121.56 11.946C120.394 11.946 119.294 12.177 118.26 12.639C117.226 13.101 116.313 13.75 115.521 14.586C114.729 15.422 114.102 16.401 113.64 17.523C113.2 18.623 112.98 19.811 112.98 21.087C112.98 22.385 113.178 23.595 113.574 24.717C113.992 25.817 114.575 26.774 115.323 27.588C116.093 28.402 117.017 29.04 118.095 29.502C119.173 29.964 120.383 30.195 121.725 30.195C122.935 30.195 124.013 30.008 124.959 29.634C125.905 29.26 126.686 28.842 127.302 28.38L128.655 31.218ZM138.5 9.141H154.01V12.21H141.701V19.47H152.69V22.539H141.701V29.931H154.472V33H138.5V9.141Z" fill="white"/>
                    <path d="M37.35 51.46C37.23 51.54 37.0667 51.63 36.86 51.73C36.6533 51.83 36.41 51.9133 36.13 51.98C35.8567 52.0467 35.5567 52.08 35.23 52.08C34.67 52.0733 34.1633 51.9733 33.71 51.78C33.2633 51.5867 32.8833 51.3233 32.57 50.99C32.2567 50.6567 32.0133 50.2733 31.84 49.84C31.6733 49.4 31.59 48.9333 31.59 48.44C31.59 47.9 31.6767 47.4033 31.85 46.95C32.03 46.49 32.28 46.0933 32.6 45.76C32.92 45.42 33.2967 45.1567 33.73 44.97C34.17 44.7833 34.65 44.69 35.17 44.69C35.6033 44.69 35.9967 44.75 36.35 44.87C36.7033 44.9833 37.0067 45.12 37.26 45.28L36.87 46.18C36.67 46.0467 36.4267 45.92 36.14 45.8C35.86 45.68 35.5467 45.62 35.2 45.62C34.8467 45.62 34.5133 45.69 34.2 45.83C33.8867 45.97 33.61 46.1667 33.37 46.42C33.13 46.6733 32.94 46.97 32.8 47.31C32.6667 47.6433 32.6 48.0033 32.6 48.39C32.6 48.7833 32.66 49.15 32.78 49.49C32.9067 49.8233 33.0833 50.1133 33.31 50.36C33.5433 50.6067 33.8233 50.8 34.15 50.94C34.4767 51.08 34.8433 51.15 35.25 51.15C35.6167 51.15 35.9433 51.0933 36.23 50.98C36.5167 50.8667 36.7533 50.74 36.94 50.6L37.35 51.46ZM40.3334 44.77H41.3034V51.07H44.9734V52H40.3334V44.77ZM47.3173 48.39C47.3173 47.89 47.4107 47.42 47.5973 46.98C47.7907 46.5333 48.0573 46.14 48.3973 45.8C48.7373 45.4533 49.1273 45.1833 49.5673 44.99C50.014 44.79 50.494 44.69 51.0073 44.69C51.514 44.69 51.9873 44.79 52.4273 44.99C52.874 45.1833 53.2673 45.4533 53.6073 45.8C53.954 46.14 54.224 46.5333 54.4173 46.98C54.6107 47.42 54.7073 47.89 54.7073 48.39C54.7073 48.9033 54.6107 49.3833 54.4173 49.83C54.224 50.2767 53.954 50.67 53.6073 51.01C53.2673 51.3433 52.874 51.6067 52.4273 51.8C51.9873 51.9867 51.514 52.08 51.0073 52.08C50.494 52.08 50.014 51.9867 49.5673 51.8C49.1273 51.6133 48.7373 51.3533 48.3973 51.02C48.0573 50.6867 47.7907 50.2967 47.5973 49.85C47.4107 49.4033 47.3173 48.9167 47.3173 48.39ZM48.3173 48.4C48.3173 48.78 48.3873 49.1367 48.5273 49.47C48.6673 49.7967 48.8607 50.0867 49.1073 50.34C49.354 50.5933 49.6407 50.7933 49.9673 50.94C50.294 51.08 50.6473 51.15 51.0273 51.15C51.4007 51.15 51.7507 51.08 52.0773 50.94C52.404 50.7933 52.6873 50.5933 52.9273 50.34C53.1673 50.0867 53.3573 49.7967 53.4973 49.47C53.6373 49.1367 53.7073 48.7767 53.7073 48.39C53.7073 48.01 53.6373 47.6533 53.4973 47.32C53.3573 46.98 53.164 46.6833 52.9173 46.43C52.6707 46.1767 52.384 45.98 52.0573 45.84C51.7307 45.6933 51.3807 45.62 51.0073 45.62C50.6273 45.62 50.274 45.6933 49.9473 45.84C49.6207 45.9867 49.334 46.1867 49.0873 46.44C48.8407 46.6933 48.6507 46.99 48.5173 47.33C48.384 47.6633 48.3173 48.02 48.3173 48.4ZM56.8588 44.77H61.6588V45.7H59.7188V52H58.7488V45.7H56.8588V44.77ZM70.2694 44.77V52H69.3094V48.83H65.5194V52H64.5494V44.77H65.5194V47.91H69.3094V44.77H70.2694ZM73.7021 44.77H78.4021V45.7H74.6721V47.9H78.0021V48.83H74.6721V51.07H78.5421V52H73.7021V44.77ZM85.3155 46.06C85.0689 45.9333 84.7989 45.8233 84.5055 45.73C84.2122 45.6367 83.9255 45.59 83.6455 45.59C83.2589 45.59 82.9489 45.68 82.7155 45.86C82.4889 46.04 82.3755 46.28 82.3755 46.58C82.3755 46.8067 82.4489 47 82.5955 47.16C82.7422 47.3133 82.9355 47.4467 83.1755 47.56C83.4155 47.6733 83.6655 47.78 83.9255 47.88C84.1522 47.9667 84.3755 48.0633 84.5955 48.17C84.8155 48.2767 85.0122 48.41 85.1855 48.57C85.3655 48.73 85.5055 48.9267 85.6055 49.16C85.7122 49.3933 85.7655 49.6833 85.7655 50.03C85.7655 50.41 85.6689 50.7567 85.4755 51.07C85.2889 51.3833 85.0189 51.63 84.6655 51.81C84.3122 51.99 83.8922 52.08 83.4055 52.08C83.0855 52.08 82.7789 52.0433 82.4855 51.97C82.1989 51.8967 81.9322 51.8033 81.6855 51.69C81.4389 51.57 81.2189 51.4467 81.0255 51.32L81.4555 50.56C81.6155 50.6733 81.7989 50.7833 82.0055 50.89C82.2122 50.99 82.4289 51.0733 82.6555 51.14C82.8822 51.2 83.1022 51.23 83.3155 51.23C83.5422 51.23 83.7655 51.19 83.9855 51.11C84.2122 51.0233 84.3989 50.8933 84.5455 50.72C84.6922 50.5467 84.7655 50.3167 84.7655 50.03C84.7655 49.7833 84.6989 49.58 84.5655 49.42C84.4389 49.2533 84.2689 49.1133 84.0555 49C83.8422 48.88 83.6155 48.7733 83.3755 48.68C83.1489 48.5933 82.9189 48.5 82.6855 48.4C82.4522 48.2933 82.2355 48.1667 82.0355 48.02C81.8355 47.8667 81.6755 47.68 81.5555 47.46C81.4355 47.24 81.3755 46.9733 81.3755 46.66C81.3755 46.28 81.4655 45.95 81.6455 45.67C81.8322 45.3833 82.0855 45.16 82.4055 45C82.7255 44.8333 83.0922 44.7433 83.5055 44.73C83.9722 44.73 84.3822 44.7867 84.7355 44.9C85.0955 45.0133 85.4122 45.1533 85.6855 45.32L85.3155 46.06ZM96.9999 46.06C96.7533 45.9333 96.4833 45.8233 96.1899 45.73C95.8966 45.6367 95.6099 45.59 95.3299 45.59C94.9433 45.59 94.6333 45.68 94.3999 45.86C94.1733 46.04 94.0599 46.28 94.0599 46.58C94.0599 46.8067 94.1333 47 94.2799 47.16C94.4266 47.3133 94.6199 47.4467 94.8599 47.56C95.0999 47.6733 95.3499 47.78 95.6099 47.88C95.8366 47.9667 96.0599 48.0633 96.2799 48.17C96.4999 48.2767 96.6966 48.41 96.8699 48.57C97.0499 48.73 97.1899 48.9267 97.2899 49.16C97.3966 49.3933 97.4499 49.6833 97.4499 50.03C97.4499 50.41 97.3533 50.7567 97.1599 51.07C96.9733 51.3833 96.7033 51.63 96.3499 51.81C95.9966 51.99 95.5766 52.08 95.0899 52.08C94.7699 52.08 94.4633 52.0433 94.1699 51.97C93.8833 51.8967 93.6166 51.8033 93.3699 51.69C93.1233 51.57 92.9033 51.4467 92.7099 51.32L93.1399 50.56C93.2999 50.6733 93.4833 50.7833 93.6899 50.89C93.8966 50.99 94.1133 51.0733 94.3399 51.14C94.5666 51.2 94.7866 51.23 94.9999 51.23C95.2266 51.23 95.4499 51.19 95.6699 51.11C95.8966 51.0233 96.0833 50.8933 96.2299 50.72C96.3766 50.5467 96.4499 50.3167 96.4499 50.03C96.4499 49.7833 96.3833 49.58 96.2499 49.42C96.1233 49.2533 95.9533 49.1133 95.7399 49C95.5266 48.88 95.2999 48.7733 95.0599 48.68C94.8333 48.5933 94.6033 48.5 94.3699 48.4C94.1366 48.2933 93.9199 48.1667 93.7199 48.02C93.5199 47.8667 93.3599 47.68 93.2399 47.46C93.1199 47.24 93.0599 46.9733 93.0599 46.66C93.0599 46.28 93.1499 45.95 93.3299 45.67C93.5166 45.3833 93.7699 45.16 94.0899 45C94.4099 44.8333 94.7766 44.7433 95.1899 44.73C95.6566 44.73 96.0666 44.7867 96.4199 44.9C96.7799 45.0133 97.0966 45.1533 97.3699 45.32L96.9999 46.06ZM106.15 44.77V52H105.19V48.83H101.4V52H100.43V44.77H101.4V47.91H105.19V44.77H106.15ZM109.133 48.39C109.133 47.89 109.226 47.42 109.413 46.98C109.606 46.5333 109.873 46.14 110.213 45.8C110.553 45.4533 110.943 45.1833 111.383 44.99C111.83 44.79 112.31 44.69 112.823 44.69C113.33 44.69 113.803 44.79 114.243 44.99C114.69 45.1833 115.083 45.4533 115.423 45.8C115.77 46.14 116.04 46.5333 116.233 46.98C116.426 47.42 116.523 47.89 116.523 48.39C116.523 48.9033 116.426 49.3833 116.233 49.83C116.04 50.2767 115.77 50.67 115.423 51.01C115.083 51.3433 114.69 51.6067 114.243 51.8C113.803 51.9867 113.33 52.08 112.823 52.08C112.31 52.08 111.83 51.9867 111.383 51.8C110.943 51.6133 110.553 51.3533 110.213 51.02C109.873 50.6867 109.606 50.2967 109.413 49.85C109.226 49.4033 109.133 48.9167 109.133 48.39ZM110.133 48.4C110.133 48.78 110.203 49.1367 110.343 49.47C110.483 49.7967 110.676 50.0867 110.923 50.34C111.17 50.5933 111.456 50.7933 111.783 50.94C112.11 51.08 112.463 51.15 112.843 51.15C113.216 51.15 113.566 51.08 113.893 50.94C114.22 50.7933 114.503 50.5933 114.743 50.34C114.983 50.0867 115.173 49.7967 115.313 49.47C115.453 49.1367 115.523 48.7767 115.523 48.39C115.523 48.01 115.453 47.6533 115.313 47.32C115.173 46.98 114.98 46.6833 114.733 46.43C114.486 46.1767 114.2 45.98 113.873 45.84C113.546 45.6933 113.196 45.62 112.823 45.62C112.443 45.62 112.09 45.6933 111.763 45.84C111.436 45.9867 111.15 46.1867 110.903 46.44C110.656 46.6933 110.466 46.99 110.333 47.33C110.2 47.6633 110.133 48.02 110.133 48.4ZM121.437 44.77C121.964 44.77 122.414 44.86 122.787 45.04C123.161 45.2133 123.447 45.4667 123.647 45.8C123.854 46.1333 123.957 46.5367 123.957 47.01C123.957 47.2967 123.914 47.58 123.827 47.86C123.741 48.1333 123.601 48.3833 123.407 48.61C123.221 48.83 122.974 49.0067 122.667 49.14C122.361 49.2733 121.987 49.34 121.547 49.34H120.477V52H119.507V44.77H121.437ZM121.537 48.41C121.824 48.41 122.061 48.3633 122.247 48.27C122.434 48.1767 122.581 48.06 122.687 47.92C122.794 47.7733 122.871 47.62 122.917 47.46C122.964 47.3 122.987 47.1567 122.987 47.03C122.987 46.8833 122.964 46.7333 122.917 46.58C122.871 46.42 122.791 46.2767 122.677 46.15C122.571 46.0167 122.427 45.91 122.247 45.83C122.074 45.7433 121.857 45.7 121.597 45.7H120.477V48.41H121.537Z" fill="white"/>
                    </svg>
                </div>

                <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>

                    <svg className='close' onClick={toggleMenu}  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3 0.70998C13.2075 0.617276 13.0976 0.543728 12.9766 0.493547C12.8556 0.443366 12.726 0.417535 12.595 0.417535C12.464 0.417535 12.3343 0.443366 12.2134 0.493547C12.0924 0.543728 11.9825 0.617276 11.89 0.70998L6.99999 5.58998L2.10999 0.699979C2.01741 0.607397 1.9075 0.533957 1.78654 0.483852C1.66557 0.433747 1.53593 0.407959 1.40499 0.407959C1.27406 0.407959 1.14442 0.433747 1.02345 0.483852C0.902487 0.533957 0.792576 0.607397 0.699995 0.699979C0.607413 0.792561 0.533973 0.902472 0.483868 1.02344C0.433763 1.1444 0.407974 1.27405 0.407974 1.40498C0.407974 1.53591 0.433763 1.66556 0.483868 1.78652C0.533973 1.90749 0.607413 2.0174 0.699995 2.10998L5.58999 6.99998L0.699995 11.89C0.607413 11.9826 0.533973 12.0925 0.483868 12.2134C0.433763 12.3344 0.407974 12.464 0.407974 12.595C0.407974 12.7259 0.433763 12.8556 0.483868 12.9765C0.533973 13.0975 0.607413 13.2074 0.699995 13.3C0.792576 13.3926 0.902487 13.466 1.02345 13.5161C1.14442 13.5662 1.27406 13.592 1.40499 13.592C1.53593 13.592 1.66557 13.5662 1.78654 13.5161C1.9075 13.466 2.01741 13.3926 2.10999 13.3L6.99999 8.40998L11.89 13.3C11.9826 13.3926 12.0925 13.466 12.2135 13.5161C12.3344 13.5662 12.4641 13.592 12.595 13.592C12.7259 13.592 12.8556 13.5662 12.9765 13.5161C13.0975 13.466 13.2074 13.3926 13.3 13.3C13.3926 13.2074 13.466 13.0975 13.5161 12.9765C13.5662 12.8556 13.592 12.7259 13.592 12.595C13.592 12.464 13.5662 12.3344 13.5161 12.2134C13.466 12.0925 13.3926 11.9826 13.3 11.89L8.40999 6.99998L13.3 2.10998C13.68 1.72998 13.68 1.08998 13.3 0.70998Z" fill="#444444"/>
                    </svg>

                    <ul>
                       <Link to='/'><li className={isHomeOrWomensClothes ? 'white' : 'black'}><a className={activePage === 'home' ? 'nav-link active' : 'nav-link'} href="#">Home</a></li></Link>
                        <Link to='/womens-clothes'><li><a className={activePage === 'womens-clothes' ? 'nav-link active' : 'nav-link womens-clothes'} href="#">Women's Clothes</a></li></Link>
                        <Link to='/' className='mobile-link-logo'><div className={`logo ${isHomeOrWomensClothes ? 'white-links' : 'black-links'}`}>
                            <svg width="157" height="57" viewBox="0 0 157 57" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.774 13.398C14.96 12.98 14.069 12.617 13.101 12.309C12.133 12.001 11.187 11.847 10.263 11.847C8.987 11.847 7.964 12.144 7.194 12.738C6.446 13.332 6.072 14.124 6.072 15.114C6.072 15.862 6.314 16.5 6.798 17.028C7.282 17.534 7.92 17.974 8.712 18.348C9.504 18.722 10.329 19.074 11.187 19.404C11.935 19.69 12.672 20.009 13.398 20.361C14.124 20.713 14.773 21.153 15.345 21.681C15.939 22.209 16.401 22.858 16.731 23.628C17.083 24.398 17.259 25.355 17.259 26.499C17.259 27.753 16.94 28.897 16.302 29.931C15.686 30.965 14.795 31.779 13.629 32.373C12.463 32.967 11.077 33.264 9.471 33.264C8.415 33.264 7.403 33.143 6.435 32.901C5.489 32.659 4.609 32.351 3.795 31.977C2.981 31.581 2.255 31.174 1.617 30.756L3.036 28.248C3.564 28.622 4.169 28.985 4.851 29.337C5.533 29.667 6.248 29.942 6.996 30.162C7.744 30.36 8.47 30.459 9.174 30.459C9.922 30.459 10.659 30.327 11.385 30.063C12.133 29.777 12.749 29.348 13.233 28.776C13.717 28.204 13.959 27.445 13.959 26.499C13.959 25.685 13.739 25.014 13.299 24.486C12.881 23.936 12.32 23.474 11.616 23.1C10.912 22.704 10.164 22.352 9.372 22.044C8.624 21.758 7.865 21.45 7.095 21.12C6.325 20.768 5.61 20.35 4.95 19.866C4.29 19.36 3.762 18.744 3.366 18.018C2.97 17.292 2.772 16.412 2.772 15.378C2.772 14.124 3.069 13.035 3.663 12.111C4.279 11.165 5.115 10.428 6.171 9.9C7.227 9.35 8.437 9.053 9.801 9.009C11.341 9.009 12.694 9.196 13.86 9.57C15.048 9.944 16.093 10.406 16.995 10.956L15.774 13.398ZM25.609 21.087C25.609 19.437 25.917 17.886 26.533 16.434C27.171 14.96 28.051 13.662 29.173 12.54C30.295 11.396 31.582 10.505 33.034 9.867C34.508 9.207 36.092 8.877 37.786 8.877C39.458 8.877 41.02 9.207 42.472 9.867C43.946 10.505 45.244 11.396 46.366 12.54C47.51 13.662 48.401 14.96 49.039 16.434C49.677 17.886 49.996 19.437 49.996 21.087C49.996 22.781 49.677 24.365 49.039 25.839C48.401 27.313 47.51 28.611 46.366 29.733C45.244 30.833 43.946 31.702 42.472 32.34C41.02 32.956 39.458 33.264 37.786 33.264C36.092 33.264 34.508 32.956 33.034 32.34C31.582 31.724 30.295 30.866 29.173 29.766C28.051 28.666 27.171 27.379 26.533 25.905C25.917 24.431 25.609 22.825 25.609 21.087ZM28.909 21.12C28.909 22.374 29.14 23.551 29.602 24.651C30.064 25.729 30.702 26.686 31.516 27.522C32.33 28.358 33.276 29.018 34.354 29.502C35.432 29.964 36.598 30.195 37.852 30.195C39.084 30.195 40.239 29.964 41.317 29.502C42.395 29.018 43.33 28.358 44.122 27.522C44.914 26.686 45.541 25.729 46.003 24.651C46.465 23.551 46.696 22.363 46.696 21.087C46.696 19.833 46.465 18.656 46.003 17.556C45.541 16.434 44.903 15.455 44.089 14.619C43.275 13.783 42.329 13.134 41.251 12.672C40.173 12.188 39.018 11.946 37.786 11.946C36.532 11.946 35.366 12.188 34.288 12.672C33.21 13.156 32.264 13.816 31.45 14.652C30.636 15.488 30.009 16.467 29.569 17.589C29.129 18.689 28.909 19.866 28.909 21.12ZM59.844 9.141H63.045V29.931H75.156V33H59.844V9.141ZM82.4513 33L92.8793 8.151H93.0773L103.472 33H99.8093L92.0213 13.167L94.2983 11.682L85.5863 33H82.4513ZM88.5563 23.958H97.4333L98.4893 26.73H87.6323L88.5563 23.958ZM128.655 31.218C128.259 31.482 127.72 31.779 127.038 32.109C126.356 32.439 125.553 32.714 124.629 32.934C123.727 33.154 122.737 33.264 121.659 33.264C119.811 33.242 118.139 32.912 116.643 32.274C115.169 31.636 113.915 30.767 112.881 29.667C111.847 28.567 111.044 27.302 110.472 25.872C109.922 24.42 109.647 22.88 109.647 21.252C109.647 19.47 109.933 17.831 110.505 16.335C111.099 14.817 111.924 13.508 112.98 12.408C114.036 11.286 115.279 10.417 116.709 9.801C118.161 9.185 119.745 8.877 121.461 8.877C122.891 8.877 124.189 9.075 125.355 9.471C126.521 9.845 127.522 10.296 128.358 10.824L127.071 13.794C126.411 13.354 125.608 12.936 124.662 12.54C123.738 12.144 122.704 11.946 121.56 11.946C120.394 11.946 119.294 12.177 118.26 12.639C117.226 13.101 116.313 13.75 115.521 14.586C114.729 15.422 114.102 16.401 113.64 17.523C113.2 18.623 112.98 19.811 112.98 21.087C112.98 22.385 113.178 23.595 113.574 24.717C113.992 25.817 114.575 26.774 115.323 27.588C116.093 28.402 117.017 29.04 118.095 29.502C119.173 29.964 120.383 30.195 121.725 30.195C122.935 30.195 124.013 30.008 124.959 29.634C125.905 29.26 126.686 28.842 127.302 28.38L128.655 31.218ZM138.5 9.141H154.01V12.21H141.701V19.47H152.69V22.539H141.701V29.931H154.472V33H138.5V9.141Z" fill="white"/>
                            <path d="M37.35 51.46C37.23 51.54 37.0667 51.63 36.86 51.73C36.6533 51.83 36.41 51.9133 36.13 51.98C35.8567 52.0467 35.5567 52.08 35.23 52.08C34.67 52.0733 34.1633 51.9733 33.71 51.78C33.2633 51.5867 32.8833 51.3233 32.57 50.99C32.2567 50.6567 32.0133 50.2733 31.84 49.84C31.6733 49.4 31.59 48.9333 31.59 48.44C31.59 47.9 31.6767 47.4033 31.85 46.95C32.03 46.49 32.28 46.0933 32.6 45.76C32.92 45.42 33.2967 45.1567 33.73 44.97C34.17 44.7833 34.65 44.69 35.17 44.69C35.6033 44.69 35.9967 44.75 36.35 44.87C36.7033 44.9833 37.0067 45.12 37.26 45.28L36.87 46.18C36.67 46.0467 36.4267 45.92 36.14 45.8C35.86 45.68 35.5467 45.62 35.2 45.62C34.8467 45.62 34.5133 45.69 34.2 45.83C33.8867 45.97 33.61 46.1667 33.37 46.42C33.13 46.6733 32.94 46.97 32.8 47.31C32.6667 47.6433 32.6 48.0033 32.6 48.39C32.6 48.7833 32.66 49.15 32.78 49.49C32.9067 49.8233 33.0833 50.1133 33.31 50.36C33.5433 50.6067 33.8233 50.8 34.15 50.94C34.4767 51.08 34.8433 51.15 35.25 51.15C35.6167 51.15 35.9433 51.0933 36.23 50.98C36.5167 50.8667 36.7533 50.74 36.94 50.6L37.35 51.46ZM40.3334 44.77H41.3034V51.07H44.9734V52H40.3334V44.77ZM47.3173 48.39C47.3173 47.89 47.4107 47.42 47.5973 46.98C47.7907 46.5333 48.0573 46.14 48.3973 45.8C48.7373 45.4533 49.1273 45.1833 49.5673 44.99C50.014 44.79 50.494 44.69 51.0073 44.69C51.514 44.69 51.9873 44.79 52.4273 44.99C52.874 45.1833 53.2673 45.4533 53.6073 45.8C53.954 46.14 54.224 46.5333 54.4173 46.98C54.6107 47.42 54.7073 47.89 54.7073 48.39C54.7073 48.9033 54.6107 49.3833 54.4173 49.83C54.224 50.2767 53.954 50.67 53.6073 51.01C53.2673 51.3433 52.874 51.6067 52.4273 51.8C51.9873 51.9867 51.514 52.08 51.0073 52.08C50.494 52.08 50.014 51.9867 49.5673 51.8C49.1273 51.6133 48.7373 51.3533 48.3973 51.02C48.0573 50.6867 47.7907 50.2967 47.5973 49.85C47.4107 49.4033 47.3173 48.9167 47.3173 48.39ZM48.3173 48.4C48.3173 48.78 48.3873 49.1367 48.5273 49.47C48.6673 49.7967 48.8607 50.0867 49.1073 50.34C49.354 50.5933 49.6407 50.7933 49.9673 50.94C50.294 51.08 50.6473 51.15 51.0273 51.15C51.4007 51.15 51.7507 51.08 52.0773 50.94C52.404 50.7933 52.6873 50.5933 52.9273 50.34C53.1673 50.0867 53.3573 49.7967 53.4973 49.47C53.6373 49.1367 53.7073 48.7767 53.7073 48.39C53.7073 48.01 53.6373 47.6533 53.4973 47.32C53.3573 46.98 53.164 46.6833 52.9173 46.43C52.6707 46.1767 52.384 45.98 52.0573 45.84C51.7307 45.6933 51.3807 45.62 51.0073 45.62C50.6273 45.62 50.274 45.6933 49.9473 45.84C49.6207 45.9867 49.334 46.1867 49.0873 46.44C48.8407 46.6933 48.6507 46.99 48.5173 47.33C48.384 47.6633 48.3173 48.02 48.3173 48.4ZM56.8588 44.77H61.6588V45.7H59.7188V52H58.7488V45.7H56.8588V44.77ZM70.2694 44.77V52H69.3094V48.83H65.5194V52H64.5494V44.77H65.5194V47.91H69.3094V44.77H70.2694ZM73.7021 44.77H78.4021V45.7H74.6721V47.9H78.0021V48.83H74.6721V51.07H78.5421V52H73.7021V44.77ZM85.3155 46.06C85.0689 45.9333 84.7989 45.8233 84.5055 45.73C84.2122 45.6367 83.9255 45.59 83.6455 45.59C83.2589 45.59 82.9489 45.68 82.7155 45.86C82.4889 46.04 82.3755 46.28 82.3755 46.58C82.3755 46.8067 82.4489 47 82.5955 47.16C82.7422 47.3133 82.9355 47.4467 83.1755 47.56C83.4155 47.6733 83.6655 47.78 83.9255 47.88C84.1522 47.9667 84.3755 48.0633 84.5955 48.17C84.8155 48.2767 85.0122 48.41 85.1855 48.57C85.3655 48.73 85.5055 48.9267 85.6055 49.16C85.7122 49.3933 85.7655 49.6833 85.7655 50.03C85.7655 50.41 85.6689 50.7567 85.4755 51.07C85.2889 51.3833 85.0189 51.63 84.6655 51.81C84.3122 51.99 83.8922 52.08 83.4055 52.08C83.0855 52.08 82.7789 52.0433 82.4855 51.97C82.1989 51.8967 81.9322 51.8033 81.6855 51.69C81.4389 51.57 81.2189 51.4467 81.0255 51.32L81.4555 50.56C81.6155 50.6733 81.7989 50.7833 82.0055 50.89C82.2122 50.99 82.4289 51.0733 82.6555 51.14C82.8822 51.2 83.1022 51.23 83.3155 51.23C83.5422 51.23 83.7655 51.19 83.9855 51.11C84.2122 51.0233 84.3989 50.8933 84.5455 50.72C84.6922 50.5467 84.7655 50.3167 84.7655 50.03C84.7655 49.7833 84.6989 49.58 84.5655 49.42C84.4389 49.2533 84.2689 49.1133 84.0555 49C83.8422 48.88 83.6155 48.7733 83.3755 48.68C83.1489 48.5933 82.9189 48.5 82.6855 48.4C82.4522 48.2933 82.2355 48.1667 82.0355 48.02C81.8355 47.8667 81.6755 47.68 81.5555 47.46C81.4355 47.24 81.3755 46.9733 81.3755 46.66C81.3755 46.28 81.4655 45.95 81.6455 45.67C81.8322 45.3833 82.0855 45.16 82.4055 45C82.7255 44.8333 83.0922 44.7433 83.5055 44.73C83.9722 44.73 84.3822 44.7867 84.7355 44.9C85.0955 45.0133 85.4122 45.1533 85.6855 45.32L85.3155 46.06ZM96.9999 46.06C96.7533 45.9333 96.4833 45.8233 96.1899 45.73C95.8966 45.6367 95.6099 45.59 95.3299 45.59C94.9433 45.59 94.6333 45.68 94.3999 45.86C94.1733 46.04 94.0599 46.28 94.0599 46.58C94.0599 46.8067 94.1333 47 94.2799 47.16C94.4266 47.3133 94.6199 47.4467 94.8599 47.56C95.0999 47.6733 95.3499 47.78 95.6099 47.88C95.8366 47.9667 96.0599 48.0633 96.2799 48.17C96.4999 48.2767 96.6966 48.41 96.8699 48.57C97.0499 48.73 97.1899 48.9267 97.2899 49.16C97.3966 49.3933 97.4499 49.6833 97.4499 50.03C97.4499 50.41 97.3533 50.7567 97.1599 51.07C96.9733 51.3833 96.7033 51.63 96.3499 51.81C95.9966 51.99 95.5766 52.08 95.0899 52.08C94.7699 52.08 94.4633 52.0433 94.1699 51.97C93.8833 51.8967 93.6166 51.8033 93.3699 51.69C93.1233 51.57 92.9033 51.4467 92.7099 51.32L93.1399 50.56C93.2999 50.6733 93.4833 50.7833 93.6899 50.89C93.8966 50.99 94.1133 51.0733 94.3399 51.14C94.5666 51.2 94.7866 51.23 94.9999 51.23C95.2266 51.23 95.4499 51.19 95.6699 51.11C95.8966 51.0233 96.0833 50.8933 96.2299 50.72C96.3766 50.5467 96.4499 50.3167 96.4499 50.03C96.4499 49.7833 96.3833 49.58 96.2499 49.42C96.1233 49.2533 95.9533 49.1133 95.7399 49C95.5266 48.88 95.2999 48.7733 95.0599 48.68C94.8333 48.5933 94.6033 48.5 94.3699 48.4C94.1366 48.2933 93.9199 48.1667 93.7199 48.02C93.5199 47.8667 93.3599 47.68 93.2399 47.46C93.1199 47.24 93.0599 46.9733 93.0599 46.66C93.0599 46.28 93.1499 45.95 93.3299 45.67C93.5166 45.3833 93.7699 45.16 94.0899 45C94.4099 44.8333 94.7766 44.7433 95.1899 44.73C95.6566 44.73 96.0666 44.7867 96.4199 44.9C96.7799 45.0133 97.0966 45.1533 97.3699 45.32L96.9999 46.06ZM106.15 44.77V52H105.19V48.83H101.4V52H100.43V44.77H101.4V47.91H105.19V44.77H106.15ZM109.133 48.39C109.133 47.89 109.226 47.42 109.413 46.98C109.606 46.5333 109.873 46.14 110.213 45.8C110.553 45.4533 110.943 45.1833 111.383 44.99C111.83 44.79 112.31 44.69 112.823 44.69C113.33 44.69 113.803 44.79 114.243 44.99C114.69 45.1833 115.083 45.4533 115.423 45.8C115.77 46.14 116.04 46.5333 116.233 46.98C116.426 47.42 116.523 47.89 116.523 48.39C116.523 48.9033 116.426 49.3833 116.233 49.83C116.04 50.2767 115.77 50.67 115.423 51.01C115.083 51.3433 114.69 51.6067 114.243 51.8C113.803 51.9867 113.33 52.08 112.823 52.08C112.31 52.08 111.83 51.9867 111.383 51.8C110.943 51.6133 110.553 51.3533 110.213 51.02C109.873 50.6867 109.606 50.2967 109.413 49.85C109.226 49.4033 109.133 48.9167 109.133 48.39ZM110.133 48.4C110.133 48.78 110.203 49.1367 110.343 49.47C110.483 49.7967 110.676 50.0867 110.923 50.34C111.17 50.5933 111.456 50.7933 111.783 50.94C112.11 51.08 112.463 51.15 112.843 51.15C113.216 51.15 113.566 51.08 113.893 50.94C114.22 50.7933 114.503 50.5933 114.743 50.34C114.983 50.0867 115.173 49.7967 115.313 49.47C115.453 49.1367 115.523 48.7767 115.523 48.39C115.523 48.01 115.453 47.6533 115.313 47.32C115.173 46.98 114.98 46.6833 114.733 46.43C114.486 46.1767 114.2 45.98 113.873 45.84C113.546 45.6933 113.196 45.62 112.823 45.62C112.443 45.62 112.09 45.6933 111.763 45.84C111.436 45.9867 111.15 46.1867 110.903 46.44C110.656 46.6933 110.466 46.99 110.333 47.33C110.2 47.6633 110.133 48.02 110.133 48.4ZM121.437 44.77C121.964 44.77 122.414 44.86 122.787 45.04C123.161 45.2133 123.447 45.4667 123.647 45.8C123.854 46.1333 123.957 46.5367 123.957 47.01C123.957 47.2967 123.914 47.58 123.827 47.86C123.741 48.1333 123.601 48.3833 123.407 48.61C123.221 48.83 122.974 49.0067 122.667 49.14C122.361 49.2733 121.987 49.34 121.547 49.34H120.477V52H119.507V44.77H121.437ZM121.537 48.41C121.824 48.41 122.061 48.3633 122.247 48.27C122.434 48.1767 122.581 48.06 122.687 47.92C122.794 47.7733 122.871 47.62 122.917 47.46C122.964 47.3 122.987 47.1567 122.987 47.03C122.987 46.8833 122.964 46.7333 122.917 46.58C122.871 46.42 122.791 46.2767 122.677 46.15C122.571 46.0167 122.427 45.91 122.247 45.83C122.074 45.7433 121.857 45.7 121.597 45.7H120.477V48.41H121.537Z" fill="white"/>
                            </svg>
                        </div></Link>
                        <Link to='/our-story'><li><a className={activePage === 'our-story' ? 'nav-link active' : 'nav-link'} href="#">Our Story</a></li></Link>
                        <Link to='/contacts'><li><a className={activePage === 'contacts' ? 'nav-link active' : 'nav-link'} href="#">Contacts</a></li></Link>
                    </ul>
                </nav>
                <div className={`toggle-menu ${isMenuOpen ? "open" : ""}`}>
                   <button className={`menu-button ${isHomeOrWomensClothes ? 'white-links' : 'black-links'}`} onClick={toggleMenu}>&#9776;</button>
                </div>
            </nav>
        </div>
    )
}