import './Footer.scss'

export default function Footer() { 
    return(
        <>
            <div className="footer">
                <div className="left-side-footer">
                    <svg width="190" height="54" viewBox="0 0 190 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5978 6.64595C16.5865 6.12662 15.4795 5.67562 14.2768 5.29295C13.0741 4.91029 11.8988 4.71895 10.7508 4.71895C9.16546 4.71895 7.89446 5.08795 6.93779 5.82595C6.00846 6.56395 5.54379 7.54795 5.54379 8.77795C5.54379 9.70729 5.84446 10.5 6.44579 11.156C7.04712 11.7846 7.83979 12.3313 8.82379 12.796C9.80779 13.2606 10.8328 13.698 11.8988 14.108C12.8281 14.4633 13.7438 14.8596 14.6458 15.297C15.5478 15.7343 16.3541 16.281 17.0648 16.937C17.8028 17.593 18.3768 18.3993 18.7868 19.356C19.2241 20.3126 19.4428 21.5016 19.4428 22.923C19.4428 24.481 19.0465 25.9023 18.2538 27.187C17.4885 28.4716 16.3815 29.483 14.9328 30.221C13.4841 30.959 11.7621 31.328 9.76679 31.328C8.45479 31.328 7.19746 31.1776 5.99479 30.877C4.81946 30.5763 3.72612 30.1936 2.71479 29.729C1.70346 29.237 0.801456 28.7313 0.00878906 28.212L1.77179 25.096C2.42779 25.5606 3.17946 26.0116 4.02679 26.449C4.87412 26.859 5.76246 27.2006 6.69179 27.474C7.62112 27.72 8.52312 27.843 9.39779 27.843C10.3271 27.843 11.2428 27.679 12.1448 27.351C13.0741 26.9956 13.8395 26.4626 14.4408 25.752C15.0421 25.0413 15.3428 24.0983 15.3428 22.923C15.3428 21.9116 15.0695 21.078 14.5228 20.422C14.0035 19.7386 13.3065 19.1646 12.4318 18.7C11.5571 18.208 10.6278 17.7706 9.64379 17.388C8.71446 17.0326 7.77146 16.65 6.81479 16.24C5.85812 15.8026 4.96979 15.2833 4.14979 14.682C3.32979 14.0533 2.67379 13.288 2.18179 12.386C1.68979 11.484 1.44379 10.3906 1.44379 9.10595C1.44379 7.54795 1.81279 6.19495 2.55079 5.04695C3.31612 3.87162 4.35479 2.95595 5.66679 2.29995C6.97879 1.61662 8.48212 1.24762 10.1768 1.19295C12.0901 1.19295 13.7711 1.42529 15.2198 1.88995C16.6958 2.35462 17.9941 2.92862 19.1148 3.61195L17.5978 6.64595Z" fill="white"/>
<path d="M29.8171 16.199C29.8171 14.149 30.1997 12.222 30.9651 10.418C31.7577 8.58662 32.8511 6.97395 34.2451 5.57995C35.6391 4.15862 37.2381 3.05162 39.0421 2.25895C40.8734 1.43895 42.8414 1.02895 44.9461 1.02895C47.0234 1.02895 48.9641 1.43895 50.7681 2.25895C52.5994 3.05162 54.2121 4.15862 55.6061 5.57995C57.0274 6.97395 58.1344 8.58662 58.9271 10.418C59.7197 12.222 60.1161 14.149 60.1161 16.199C60.1161 18.3036 59.7197 20.2716 58.9271 22.103C58.1344 23.9343 57.0274 25.547 55.6061 26.941C54.2121 28.3076 52.5994 29.3873 50.7681 30.18C48.9641 30.9453 47.0234 31.328 44.9461 31.328C42.8414 31.328 40.8734 30.9453 39.0421 30.18C37.2381 29.4146 35.6391 28.3486 34.2451 26.982C32.8511 25.6153 31.7577 24.0163 30.9651 22.185C30.1997 20.3536 29.8171 18.3583 29.8171 16.199ZM33.9171 16.24C33.9171 17.798 34.2041 19.2603 34.7781 20.627C35.3521 21.9663 36.1447 23.1553 37.1561 24.194C38.1674 25.2326 39.3427 26.0526 40.6821 26.654C42.0214 27.228 43.4701 27.515 45.0281 27.515C46.5587 27.515 47.9937 27.228 49.3331 26.654C50.6724 26.0526 51.8341 25.2326 52.8181 24.194C53.8021 23.1553 54.5811 21.9663 55.1551 20.627C55.7291 19.2603 56.0161 17.7843 56.0161 16.199C56.0161 14.641 55.7291 13.1786 55.1551 11.812C54.5811 10.418 53.7884 9.20162 52.7771 8.16295C51.7657 7.12429 50.5904 6.31795 49.2511 5.74395C47.9117 5.14262 46.4767 4.84195 44.9461 4.84195C43.3881 4.84195 41.9394 5.14262 40.6001 5.74395C39.2607 6.34529 38.0854 7.16529 37.0741 8.20395C36.0627 9.24262 35.2837 10.459 34.7371 11.853C34.1904 13.2196 33.9171 14.682 33.9171 16.24Z" fill="white"/>
<path d="M72.3514 1.35695H76.3284V27.187H91.3754V31H72.3514V1.35695Z" fill="white"/>
<path d="M100.439 31L113.395 0.126953H113.641L126.556 31H122.005L112.329 6.35895L115.158 4.51395L104.334 31H100.439ZM108.024 19.766H119.053L120.365 23.21H106.876L108.024 19.766Z" fill="white"/>
<path d="M157.844 28.786C157.352 29.114 156.682 29.483 155.835 29.893C154.987 30.303 153.99 30.6446 152.842 30.918C151.721 31.1913 150.491 31.328 149.152 31.328C146.856 31.3006 144.778 30.8906 142.92 30.098C141.088 29.3053 139.53 28.2256 138.246 26.859C136.961 25.4923 135.963 23.9206 135.253 22.144C134.569 20.34 134.228 18.4266 134.228 16.404C134.228 14.19 134.583 12.1536 135.294 10.295C136.032 8.40895 137.057 6.78262 138.369 5.41595C139.681 4.02195 141.225 2.94229 143.002 2.17695C144.806 1.41162 146.774 1.02895 148.906 1.02895C150.682 1.02895 152.295 1.27495 153.744 1.76695C155.192 2.23162 156.436 2.79195 157.475 3.44795L155.876 7.13795C155.056 6.59129 154.058 6.07195 152.883 5.57995C151.735 5.08795 150.45 4.84195 149.029 4.84195C147.58 4.84195 146.213 5.12895 144.929 5.70295C143.644 6.27695 142.51 7.08329 141.526 8.12195C140.542 9.16062 139.763 10.377 139.189 11.771C138.642 13.1376 138.369 14.6136 138.369 16.199C138.369 17.8116 138.615 19.315 139.107 20.709C139.626 22.0756 140.35 23.2646 141.28 24.276C142.236 25.2873 143.384 26.08 144.724 26.654C146.063 27.228 147.566 27.515 149.234 27.515C150.737 27.515 152.076 27.2826 153.252 26.818C154.427 26.3533 155.397 25.834 156.163 25.26L157.844 28.786Z" fill="white"/>
<path d="M170.076 1.35695H189.346V5.16995H174.053V14.19H187.706V18.003H174.053V27.187H189.92V31H170.076V1.35695Z" fill="white"/>
<path d="M42.2548 52.298C42.0988 52.402 41.8865 52.519 41.6178 52.649C41.3491 52.779 41.0328 52.8873 40.6688 52.974C40.3135 53.0606 39.9235 53.104 39.4988 53.104C38.7708 53.0953 38.1121 52.9653 37.5228 52.714C36.9421 52.4626 36.4481 52.1203 36.0408 51.687C35.6335 51.2536 35.3171 50.7553 35.0918 50.192C34.8751 49.62 34.7668 49.0133 34.7668 48.372C34.7668 47.67 34.8795 47.0243 35.1048 46.435C35.3388 45.837 35.6638 45.3213 36.0798 44.888C36.4958 44.446 36.9855 44.1036 37.5488 43.861C38.1208 43.6183 38.7448 43.497 39.4208 43.497C39.9841 43.497 40.4955 43.575 40.9548 43.731C41.4141 43.8783 41.8085 44.056 42.1378 44.264L41.6308 45.434C41.3708 45.2606 41.0545 45.096 40.6818 44.94C40.3178 44.784 39.9105 44.706 39.4598 44.706C39.0005 44.706 38.5671 44.797 38.1598 44.979C37.7525 45.161 37.3928 45.4166 37.0808 45.746C36.7688 46.0753 36.5218 46.461 36.3398 46.903C36.1665 47.3363 36.0798 47.8043 36.0798 48.307C36.0798 48.8183 36.1578 49.295 36.3138 49.737C36.4785 50.1703 36.7081 50.5473 37.0028 50.868C37.3061 51.1886 37.6701 51.44 38.0948 51.622C38.5195 51.804 38.9961 51.895 39.5248 51.895C40.0015 51.895 40.4261 51.8213 40.7988 51.674C41.1715 51.5266 41.4791 51.362 41.7218 51.18L42.2548 52.298Z" fill="white"/>
<path d="M46.1332 43.601H47.3942V51.791H52.1652V53H46.1332V43.601Z" fill="white"/>
<path d="M55.2123 48.307C55.2123 47.657 55.3337 47.046 55.5763 46.474C55.8277 45.8933 56.1743 45.382 56.6163 44.94C57.0583 44.4893 57.5653 44.1383 58.1373 43.887C58.718 43.627 59.342 43.497 60.0093 43.497C60.668 43.497 61.2833 43.627 61.8553 43.887C62.436 44.1383 62.9473 44.4893 63.3893 44.94C63.84 45.382 64.191 45.8933 64.4423 46.474C64.6937 47.046 64.8193 47.657 64.8193 48.307C64.8193 48.9743 64.6937 49.5983 64.4423 50.179C64.191 50.7596 63.84 51.271 63.3893 51.713C62.9473 52.1463 62.436 52.4886 61.8553 52.74C61.2833 52.9826 60.668 53.104 60.0093 53.104C59.342 53.104 58.718 52.9826 58.1373 52.74C57.5653 52.4973 57.0583 52.1593 56.6163 51.726C56.1743 51.2926 55.8277 50.7856 55.5763 50.205C55.3337 49.6243 55.2123 48.9916 55.2123 48.307ZM56.5123 48.32C56.5123 48.814 56.6033 49.2776 56.7853 49.711C56.9673 50.1356 57.2187 50.5126 57.5393 50.842C57.86 51.1713 58.2327 51.4313 58.6573 51.622C59.082 51.804 59.5413 51.895 60.0353 51.895C60.5207 51.895 60.9757 51.804 61.4003 51.622C61.825 51.4313 62.1933 51.1713 62.5053 50.842C62.8173 50.5126 63.0643 50.1356 63.2463 49.711C63.4283 49.2776 63.5193 48.8096 63.5193 48.307C63.5193 47.813 63.4283 47.3493 63.2463 46.916C63.0643 46.474 62.813 46.0883 62.4923 45.759C62.1717 45.4296 61.799 45.174 61.3743 44.992C60.9497 44.8013 60.4947 44.706 60.0093 44.706C59.5153 44.706 59.056 44.8013 58.6313 44.992C58.2067 45.1826 57.834 45.4426 57.5133 45.772C57.1927 46.1013 56.9457 46.487 56.7723 46.929C56.599 47.3623 56.5123 47.826 56.5123 48.32Z" fill="white"/>
<path d="M67.6163 43.601H73.8563V44.81H71.3343V53H70.0733V44.81H67.6163V43.601Z" fill="white"/>
<path d="M85.05 43.601V53H83.802V48.879H78.875V53H77.614V43.601H78.875V47.683H83.802V43.601H85.05Z" fill="white"/>
<path d="M89.5125 43.601H95.6225V44.81H90.7735V47.67H95.1025V48.879H90.7735V51.791H95.8045V53H89.5125V43.601Z" fill="white"/>
<path d="M104.61 45.278C104.289 45.1133 103.938 44.9703 103.557 44.849C103.176 44.7276 102.803 44.667 102.439 44.667C101.936 44.667 101.533 44.784 101.23 45.018C100.935 45.252 100.788 45.564 100.788 45.954C100.788 46.2486 100.883 46.5 101.074 46.708C101.265 46.9073 101.516 47.0806 101.828 47.228C102.14 47.3753 102.465 47.514 102.803 47.644C103.098 47.7566 103.388 47.8823 103.674 48.021C103.96 48.1596 104.216 48.333 104.441 48.541C104.675 48.749 104.857 49.0046 104.987 49.308C105.126 49.6113 105.195 49.9883 105.195 50.439C105.195 50.933 105.069 51.3836 104.818 51.791C104.575 52.1983 104.224 52.519 103.765 52.753C103.306 52.987 102.76 53.104 102.127 53.104C101.711 53.104 101.312 53.0563 100.931 52.961C100.558 52.8656 100.212 52.7443 99.891 52.597C99.5703 52.441 99.2843 52.2806 99.033 52.116L99.592 51.128C99.8 51.2753 100.038 51.4183 100.307 51.557C100.576 51.687 100.857 51.7953 101.152 51.882C101.447 51.96 101.733 51.999 102.01 51.999C102.305 51.999 102.595 51.947 102.881 51.843C103.176 51.7303 103.418 51.5613 103.609 51.336C103.8 51.1106 103.895 50.8116 103.895 50.439C103.895 50.1183 103.808 49.854 103.635 49.646C103.47 49.4293 103.249 49.2473 102.972 49.1C102.695 48.944 102.4 48.8053 102.088 48.684C101.793 48.5713 101.494 48.45 101.191 48.32C100.888 48.1813 100.606 48.0166 100.346 47.826C100.086 47.6266 99.878 47.384 99.722 47.098C99.566 46.812 99.488 46.4653 99.488 46.058C99.488 45.564 99.605 45.135 99.839 44.771C100.082 44.3983 100.411 44.108 100.827 43.9C101.243 43.6833 101.72 43.5663 102.257 43.549C102.864 43.549 103.397 43.6226 103.856 43.77C104.324 43.9173 104.736 44.0993 105.091 44.316L104.61 45.278Z" fill="white"/>
<path d="M119.8 45.278C119.479 45.1133 119.128 44.9703 118.747 44.849C118.365 44.7276 117.993 44.667 117.629 44.667C117.126 44.667 116.723 44.784 116.42 45.018C116.125 45.252 115.978 45.564 115.978 45.954C115.978 46.2486 116.073 46.5 116.264 46.708C116.454 46.9073 116.706 47.0806 117.018 47.228C117.33 47.3753 117.655 47.514 117.993 47.644C118.287 47.7566 118.578 47.8823 118.864 48.021C119.15 48.1596 119.405 48.333 119.631 48.541C119.865 48.749 120.047 49.0046 120.177 49.308C120.315 49.6113 120.385 49.9883 120.385 50.439C120.385 50.933 120.259 51.3836 120.008 51.791C119.765 52.1983 119.414 52.519 118.955 52.753C118.495 52.987 117.949 53.104 117.317 53.104C116.901 53.104 116.502 53.0563 116.121 52.961C115.748 52.8656 115.401 52.7443 115.081 52.597C114.76 52.441 114.474 52.2806 114.223 52.116L114.782 51.128C114.99 51.2753 115.228 51.4183 115.497 51.557C115.765 51.687 116.047 51.7953 116.342 51.882C116.636 51.96 116.922 51.999 117.2 51.999C117.494 51.999 117.785 51.947 118.071 51.843C118.365 51.7303 118.608 51.5613 118.799 51.336C118.989 51.1106 119.085 50.8116 119.085 50.439C119.085 50.1183 118.998 49.854 118.825 49.646C118.66 49.4293 118.439 49.2473 118.162 49.1C117.884 48.944 117.59 48.8053 117.278 48.684C116.983 48.5713 116.684 48.45 116.381 48.32C116.077 48.1813 115.796 48.0166 115.536 47.826C115.276 47.6266 115.068 47.384 114.912 47.098C114.756 46.812 114.678 46.4653 114.678 46.058C114.678 45.564 114.795 45.135 115.029 44.771C115.271 44.3983 115.601 44.108 116.017 43.9C116.433 43.6833 116.909 43.5663 117.447 43.549C118.053 43.549 118.586 43.6226 119.046 43.77C119.514 43.9173 119.925 44.0993 120.281 44.316L119.8 45.278Z" fill="white"/>
<path d="M131.695 43.601V53H130.447V48.879H125.52V53H124.259V43.601H125.52V47.683H130.447V43.601H131.695Z" fill="white"/>
<path d="M135.573 48.307C135.573 47.657 135.694 47.046 135.937 46.474C136.188 45.8933 136.535 45.382 136.977 44.94C137.419 44.4893 137.926 44.1383 138.498 43.887C139.078 43.627 139.702 43.497 140.37 43.497C141.028 43.497 141.644 43.627 142.216 43.887C142.796 44.1383 143.308 44.4893 143.75 44.94C144.2 45.382 144.551 45.8933 144.803 46.474C145.054 47.046 145.18 47.657 145.18 48.307C145.18 48.9743 145.054 49.5983 144.803 50.179C144.551 50.7596 144.2 51.271 143.75 51.713C143.308 52.1463 142.796 52.4886 142.216 52.74C141.644 52.9826 141.028 53.104 140.37 53.104C139.702 53.104 139.078 52.9826 138.498 52.74C137.926 52.4973 137.419 52.1593 136.977 51.726C136.535 51.2926 136.188 50.7856 135.937 50.205C135.694 49.6243 135.573 48.9916 135.573 48.307ZM136.873 48.32C136.873 48.814 136.964 49.2776 137.146 49.711C137.328 50.1356 137.579 50.5126 137.9 50.842C138.22 51.1713 138.593 51.4313 139.018 51.622C139.442 51.804 139.902 51.895 140.396 51.895C140.881 51.895 141.336 51.804 141.761 51.622C142.185 51.4313 142.554 51.1713 142.866 50.842C143.178 50.5126 143.425 50.1356 143.607 49.711C143.789 49.2776 143.88 48.8096 143.88 48.307C143.88 47.813 143.789 47.3493 143.607 46.916C143.425 46.474 143.173 46.0883 142.853 45.759C142.532 45.4296 142.159 45.174 141.735 44.992C141.31 44.8013 140.855 44.706 140.37 44.706C139.876 44.706 139.416 44.8013 138.992 44.992C138.567 45.1826 138.194 45.4426 137.874 45.772C137.553 46.1013 137.306 46.487 137.133 46.929C136.959 47.3623 136.873 47.826 136.873 48.32Z" fill="white"/>
<path d="M151.568 43.601C152.253 43.601 152.838 43.718 153.323 43.952C153.808 44.1773 154.181 44.5066 154.441 44.94C154.71 45.3733 154.844 45.8976 154.844 46.513C154.844 46.8856 154.788 47.254 154.675 47.618C154.562 47.9733 154.38 48.2983 154.129 48.593C153.886 48.879 153.566 49.1086 153.167 49.282C152.768 49.4553 152.283 49.542 151.711 49.542H150.32V53H149.059V43.601H151.568ZM151.698 48.333C152.071 48.333 152.378 48.2723 152.621 48.151C152.864 48.0296 153.054 47.878 153.193 47.696C153.332 47.5053 153.431 47.306 153.492 47.098C153.553 46.89 153.583 46.7036 153.583 46.539C153.583 46.3483 153.553 46.1533 153.492 45.954C153.431 45.746 153.327 45.5596 153.18 45.395C153.041 45.2216 152.855 45.083 152.621 44.979C152.396 44.8663 152.114 44.81 151.776 44.81H150.32V48.333H151.698Z" fill="white"/>
                    </svg>
                </div>
                <div className="center-footer">

                    <div className="first-col-footer">
                    <h4>About Us</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Delivery</a></li>
                        </ul>
                    </div>

                    <div className="second-col-footer">
                    <h4>Our Items</h4>
                        <ul>
                            <li><a href="#">Clothes</a></li>
                            <li><a href="#">Jewelry</a></li>
                            <li><a href="#">Shoes</a></li>
                        </ul>
                    </div>
                </div>

                <div className="right-col-footer">
                    <div className="links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
                </div>
        </>
    )
 }