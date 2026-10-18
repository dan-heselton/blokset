import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "integrations-03",
  "prefix": "integrations03",
  "name": "Integrations / Hub diagram",
  "category": "integrations",
  "collection": "saas",
  "description": "Integrations / Hub diagram for Harborline.",
  "props": {
    "icon1": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20aria-hidden%3D%22true%22%20style%3D%22position%3A%20absolute%3B%20inset%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2238%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%20stroke-dasharray%3D%221%201.4%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2222%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Csc-for%20list%3D%22%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%22%20as%3D%22l%22%20hint-placeholder-count%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2250%22%20x2%3D%22%22%20y2%3D%22%22%20stroke%3D%22%22%20stroke-width%3D%22%22%3E%3C%2Fline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsc-for%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "icon2": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20aria-hidden%3D%22true%22%20style%3D%22position%3A%20absolute%3B%20inset%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2238%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%20stroke-dasharray%3D%221%201.4%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2222%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Csc-for%20list%3D%22%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%22%20as%3D%22l%22%20hint-placeholder-count%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2250%22%20x2%3D%22%22%20y2%3D%22%22%20stroke%3D%22%22%20stroke-width%3D%22%22%3E%3C%2Fline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsc-for%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "icon3": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20aria-hidden%3D%22true%22%20style%3D%22position%3A%20absolute%3B%20inset%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2238%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%20stroke-dasharray%3D%221%201.4%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2222%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Csc-for%20list%3D%22%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%22%20as%3D%22l%22%20hint-placeholder-count%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2250%22%20x2%3D%22%22%20y2%3D%22%22%20stroke%3D%22%22%20stroke-width%3D%22%22%3E%3C%2Fline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsc-for%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "icon4": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20aria-hidden%3D%22true%22%20style%3D%22position%3A%20absolute%3B%20inset%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2238%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%20stroke-dasharray%3D%221%201.4%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2222%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Csc-for%20list%3D%22%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%22%20as%3D%22l%22%20hint-placeholder-count%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2250%22%20x2%3D%22%22%20y2%3D%22%22%20stroke%3D%22%22%20stroke-width%3D%22%22%3E%3C%2Fline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsc-for%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "icon5": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20aria-hidden%3D%22true%22%20style%3D%22position%3A%20absolute%3B%20inset%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2238%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%20stroke-dasharray%3D%221%201.4%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2222%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Csc-for%20list%3D%22%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%22%20as%3D%22l%22%20hint-placeholder-count%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2250%22%20x2%3D%22%22%20y2%3D%22%22%20stroke%3D%22%22%20stroke-width%3D%22%22%3E%3C%2Fline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsc-for%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "icon6": {
      "type": "image",
      "default": {
        "src": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20aria-hidden%3D%22true%22%20style%3D%22position%3A%20absolute%3B%20inset%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2238%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%20stroke-dasharray%3D%221%201.4%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2222%22%20fill%3D%22none%22%20stroke%3D%22%23DDE0D8%22%20stroke-width%3D%220.3%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3Csc-for%20list%3D%22%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%2C%5Bobject%20Object%5D%22%20as%3D%22l%22%20hint-placeholder-count%3D%226%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cline%20x1%3D%2250%22%20y1%3D%2250%22%20x2%3D%22%22%20y2%3D%22%22%20stroke%3D%22%22%20stroke-width%3D%22%22%3E%3C%2Fline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsc-for%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E",
        "alt": ""
      }
    },
    "heading": {
      "type": "text",
      "default": "The middle of your stack"
    },
    "subheading": {
      "type": "text",
      "default": "Pick a tool on the diagram to see what moves between it and Harborline."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-24",
        "div-42"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#F4F5F1",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-43",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "align-items": "center",
            "row-gap": "clamp(32px, 5vw, 72px)",
            "column-gap": "clamp(32px, 5vw, 72px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-24",
            "style": {
              "base": {
                "position": "relative",
                "flex-grow": "0",
                "flex-shrink": "1",
                "flex-basis": "560px",
                "width": "100%",
                "max-width": "560px",
                "aspect-ratio": "1 / 1",
                "margin-top": "0",
                "margin-right": "auto",
                "margin-bottom": "0",
                "margin-left": "auto"
              }
            },
            "children": [
              {
                "tag": "img",
                "key": "icon-1",
                "bind": "icon1",
                "decorative": true,
                "style": {
                  "base": {
                    "width": "18px",
                    "height": "18px",
                    "flex-shrink": "0"
                  }
                }
              },
              {
                "tag": "div",
                "key": "div-5",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "50%",
                    "top": "50%",
                    "transform": "translate(-50%, -50%)",
                    "width": "112px",
                    "height": "112px",
                    "border-top-left-radius": "28px",
                    "border-top-right-radius": "28px",
                    "border-bottom-right-radius": "28px",
                    "border-bottom-left-radius": "28px",
                    "background-color": "#0F1115",
                    "color": "#FFFFFF",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "8px",
                    "column-gap": "8px",
                    "box-shadow": "0 20px 40px -20px rgba(15,17,21,0.6)"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-3",
                    "style": {
                      "base": {
                        "width": "34px",
                        "height": "34px",
                        "border-top-left-radius": "9px",
                        "border-top-right-radius": "9px",
                        "border-bottom-right-radius": "9px",
                        "border-bottom-left-radius": "9px",
                        "background-color": "#2D4BF0",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-2",
                        "style": {
                          "base": {
                            "width": "13px",
                            "height": "13px",
                            "border-top-left-radius": "3px",
                            "border-top-right-radius": "3px",
                            "border-bottom-right-radius": "3px",
                            "border-bottom-left-radius": "3px",
                            "background-color": "#FFFFFF"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "font-weight": "600"
                      }
                    },
                    "text": "Harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "50%",
                    "top": "12%",
                    "transform": "translate(-50%, -50%) scale(1.08)",
                    "width": "84px",
                    "height": "84px",
                    "border-top-left-radius": "22px",
                    "border-top-right-radius": "22px",
                    "border-bottom-right-radius": "22px",
                    "border-bottom-left-radius": "22px",
                    "cursor": "pointer",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "4px",
                    "column-gap": "4px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#2D4BF0",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#2D4BF0",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2D4BF0",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#2D4BF0",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "transition": "transform 160ms ease",
                    "box-shadow": "0 10px 24px -18px rgba(15,17,21,0.5)",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-pressed": "true"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "width": "30px",
                        "height": "30px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "12px",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Bk"
                  },
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "font-size": "12px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Books"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-11",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "82.91%",
                    "top": "31%",
                    "transform": "translate(-50%, -50%) scale(1)",
                    "width": "84px",
                    "height": "84px",
                    "border-top-left-radius": "22px",
                    "border-top-right-radius": "22px",
                    "border-bottom-right-radius": "22px",
                    "border-bottom-left-radius": "22px",
                    "cursor": "pointer",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "4px",
                    "column-gap": "4px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "transition": "transform 160ms ease",
                    "box-shadow": "0 10px 24px -18px rgba(15,17,21,0.5)",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "width": "30px",
                        "height": "30px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "12px",
                        "font-weight": "600",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Py"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "font-size": "12px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Payments"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-14",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "82.91%",
                    "top": "69%",
                    "transform": "translate(-50%, -50%) scale(1)",
                    "width": "84px",
                    "height": "84px",
                    "border-top-left-radius": "22px",
                    "border-top-right-radius": "22px",
                    "border-bottom-right-radius": "22px",
                    "border-bottom-left-radius": "22px",
                    "cursor": "pointer",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "4px",
                    "column-gap": "4px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "transition": "transform 160ms ease",
                    "box-shadow": "0 10px 24px -18px rgba(15,17,21,0.5)",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "width": "30px",
                        "height": "30px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "12px",
                        "font-weight": "600",
                        "background-color": "#FDEFE4",
                        "color": "#9A4A12"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Ca"
                  },
                  {
                    "tag": "div",
                    "key": "div-13",
                    "style": {
                      "base": {
                        "font-size": "12px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Calendar"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-17",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "50%",
                    "top": "88%",
                    "transform": "translate(-50%, -50%) scale(1)",
                    "width": "84px",
                    "height": "84px",
                    "border-top-left-radius": "22px",
                    "border-top-right-radius": "22px",
                    "border-bottom-right-radius": "22px",
                    "border-bottom-left-radius": "22px",
                    "cursor": "pointer",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "4px",
                    "column-gap": "4px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "transition": "transform 160ms ease",
                    "box-shadow": "0 10px 24px -18px rgba(15,17,21,0.5)",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "width": "30px",
                        "height": "30px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "12px",
                        "font-weight": "600",
                        "background-color": "#F1E9FB",
                        "color": "#6B32A8"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Em"
                  },
                  {
                    "tag": "div",
                    "key": "div-16",
                    "style": {
                      "base": {
                        "font-size": "12px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Email"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-20",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "17.09%",
                    "top": "69%",
                    "transform": "translate(-50%, -50%) scale(1)",
                    "width": "84px",
                    "height": "84px",
                    "border-top-left-radius": "22px",
                    "border-top-right-radius": "22px",
                    "border-bottom-right-radius": "22px",
                    "border-bottom-left-radius": "22px",
                    "cursor": "pointer",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "4px",
                    "column-gap": "4px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "transition": "transform 160ms ease",
                    "box-shadow": "0 10px 24px -18px rgba(15,17,21,0.5)",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-18",
                    "style": {
                      "base": {
                        "width": "30px",
                        "height": "30px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "12px",
                        "font-weight": "600",
                        "background-color": "#ECEEE8",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Rv"
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "font-size": "12px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Reviews"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
                "style": {
                  "base": {
                    "position": "absolute",
                    "left": "17.09%",
                    "top": "31%",
                    "transform": "translate(-50%, -50%) scale(1)",
                    "width": "84px",
                    "height": "84px",
                    "border-top-left-radius": "22px",
                    "border-top-right-radius": "22px",
                    "border-bottom-right-radius": "22px",
                    "border-bottom-left-radius": "22px",
                    "cursor": "pointer",
                    "display": "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                    "justify-content": "center",
                    "row-gap": "4px",
                    "column-gap": "4px",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#E2E4DE",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#E2E4DE",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#E2E4DE",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#E2E4DE",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "transition": "transform 160ms ease",
                    "box-shadow": "0 10px 24px -18px rgba(15,17,21,0.5)",
                    "line-height": "1",
                    "flex-shrink": "0",
                    "padding-top": "0px",
                    "padding-right": "0px",
                    "padding-bottom": "0px",
                    "padding-left": "0px"
                  }
                },
                "attrs": {
                  "aria-pressed": "false"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "width": "30px",
                        "height": "30px",
                        "border-top-left-radius": "8px",
                        "border-top-right-radius": "8px",
                        "border-bottom-right-radius": "8px",
                        "border-bottom-left-radius": "8px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "12px",
                        "font-weight": "600",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "Au"
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "font-size": "12px",
                        "font-weight": "500"
                      }
                    },
                    "text": "Automate"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-42",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "380px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "20px",
                "column-gap": "20px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-25",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "letter-spacing": "0.08em",
                    "text-transform": "uppercase",
                    "color": "#5B616B"
                  }
                },
                "text": "Integrations"
              },
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(34px, 4.4vw, 56px)",
                    "line-height": "1.02",
                    "letter-spacing": "-0.04em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              },
              {
                "tag": "p",
                "key": "subheading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "18px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "div",
                "key": "stack-253",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "width": "100%"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "padding-top": "24px",
                        "padding-right": "24px",
                        "padding-bottom": "24px",
                        "padding-left": "24px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px"
                      }
                    },
                    "attrs": {
                      "role": "status",
                      "data-blok-panel": "",
                      "data-display": "flex"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-28",
                            "style": {
                              "base": {
                                "width": "40px",
                                "height": "40px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600",
                                "background-color": "#E5F4EA",
                                "color": "#1D6B3A"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Bk"
                          },
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "[Accounting app]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-31",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sends to Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-32",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Chart of accounts"
                              },
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Tax rates"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-35",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Gets from Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-36",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Invoices"
                              },
                              {
                                "tag": "div",
                                "key": "div-37",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Payments"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-40",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Setup guide →"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-83",
                    "style": {
                      "base": {
                        "padding-top": "24px",
                        "padding-right": "24px",
                        "padding-bottom": "24px",
                        "padding-left": "24px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px"
                      }
                    },
                    "attrs": {
                      "role": "status",
                      "data-blok-panel": "",
                      "data-display": "flex"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-73",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-71",
                            "style": {
                              "base": {
                                "width": "40px",
                                "height": "40px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Py"
                          },
                          {
                            "tag": "div",
                            "key": "div-72",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "[Payments provider]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-81",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-77",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-74",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sends to Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-75",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Payment status"
                              },
                              {
                                "tag": "div",
                                "key": "div-76",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Refunds"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-80",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-78",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Gets from Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-79",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Payment links"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-82",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Setup guide →"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-125",
                    "style": {
                      "base": {
                        "padding-top": "24px",
                        "padding-right": "24px",
                        "padding-bottom": "24px",
                        "padding-left": "24px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px"
                      }
                    },
                    "attrs": {
                      "role": "status",
                      "data-blok-panel": "",
                      "data-display": "flex"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-115",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-113",
                            "style": {
                              "base": {
                                "width": "40px",
                                "height": "40px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600",
                                "background-color": "#FDEFE4",
                                "color": "#9A4A12"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Ca"
                          },
                          {
                            "tag": "div",
                            "key": "div-114",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "[Calendar]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-123",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-118",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-116",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sends to Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-117",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Time off"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-122",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-119",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Gets from Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-120",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Jobs"
                              },
                              {
                                "tag": "div",
                                "key": "div-121",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Route start times"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-124",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Setup guide →"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-167",
                    "style": {
                      "base": {
                        "padding-top": "24px",
                        "padding-right": "24px",
                        "padding-bottom": "24px",
                        "padding-left": "24px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px"
                      }
                    },
                    "attrs": {
                      "role": "status",
                      "data-blok-panel": "",
                      "data-display": "flex"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-157",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-155",
                            "style": {
                              "base": {
                                "width": "40px",
                                "height": "40px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600",
                                "background-color": "#F1E9FB",
                                "color": "#6B32A8"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Em"
                          },
                          {
                            "tag": "div",
                            "key": "div-156",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "[Email marketing]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-165",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-160",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-158",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sends to Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-159",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Unsubscribes"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-164",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-161",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Gets from Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-162",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ New customers"
                              },
                              {
                                "tag": "div",
                                "key": "div-163",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Service tags"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-166",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Setup guide →"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-208",
                    "style": {
                      "base": {
                        "padding-top": "24px",
                        "padding-right": "24px",
                        "padding-bottom": "24px",
                        "padding-left": "24px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px"
                      }
                    },
                    "attrs": {
                      "role": "status",
                      "data-blok-panel": "",
                      "data-display": "flex"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-199",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-197",
                            "style": {
                              "base": {
                                "width": "40px",
                                "height": "40px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600",
                                "background-color": "#ECEEE8",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Rv"
                          },
                          {
                            "tag": "div",
                            "key": "div-198",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "[Review site]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-206",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-202",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-200",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sends to Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-201",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← New reviews"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-205",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-203",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Gets from Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-204",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Review requests"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-207",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Setup guide →"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-250",
                    "style": {
                      "base": {
                        "padding-top": "24px",
                        "padding-right": "24px",
                        "padding-bottom": "24px",
                        "padding-left": "24px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DDE0D8",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DDE0D8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DDE0D8",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DDE0D8",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px"
                      }
                    },
                    "attrs": {
                      "role": "status",
                      "data-blok-panel": "",
                      "data-display": "flex"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-240",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-238",
                            "style": {
                              "base": {
                                "width": "40px",
                                "height": "40px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600",
                                "background-color": "#E8ECFE",
                                "color": "#2D4BF0"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Au"
                          },
                          {
                            "tag": "div",
                            "key": "div-239",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "[Automation tool]"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-248",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-243",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-241",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sends to Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-242",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "← Any trigger"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-247",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-244",
                                "style": {
                                  "base": {
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "11px",
                                    "letter-spacing": "0.08em",
                                    "text-transform": "uppercase",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Gets from Harborline"
                              },
                              {
                                "tag": "div",
                                "key": "div-245",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Job events"
                              },
                              {
                                "tag": "div",
                                "key": "div-246",
                                "style": {
                                  "base": {
                                    "font-size": "15px"
                                  }
                                },
                                "text": "→ Invoice events"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-249",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Setup guide →"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
    }
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
