import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "footer-06",
  "prefix": "footer06",
  "name": "Footer / Newsletter wordmark",
  "category": "footer",
  "collection": "saas",
  "description": "Footer / Newsletter wordmark for Harborline.",
  "props": {},
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "div-27",
        "div-33",
        "div-34"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#FFFFFF",
        "padding-top": "clamp(48px, 6vw, 72px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "0",
        "padding-left": "clamp(20px, 4vw, 48px)",
        "overflow": "hidden",
        "border-top-width": "1px",
        "border-top-style": "solid",
        "border-top-color": "#ECEEE8"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-35",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "40px",
            "column-gap": "40px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-27",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "row-gap": "40px",
                "column-gap": "40px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "360px",
                    "max-width": "440px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-1",
                    "style": {
                      "base": {
                        "font-size": "20px",
                        "font-weight": "600",
                        "letter-spacing": "-0.02em"
                      }
                    },
                    "text": "Field notes, monthly"
                  },
                  {
                    "tag": "div",
                    "key": "div-2",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "line-height": "1.55",
                        "color": "#4E545D"
                      }
                    },
                    "text": "Product updates and one useful idea for running crews. No spam."
                  },
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "6px",
                        "column-gap": "6px",
                        "padding-top": "5px",
                        "padding-right": "5px",
                        "padding-bottom": "5px",
                        "padding-left": "5px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
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
                        "background-color": "#F4F5F1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-3",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "width": "1px",
                            "height": "1px",
                            "overflow": "hidden",
                            "clip": "rect(0 0 0 0)"
                          }
                        },
                        "text": "Email"
                      },
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "min-width": "0",
                            "height": "44px",
                            "padding-top": "0",
                            "padding-right": "10px",
                            "padding-bottom": "0",
                            "padding-left": "10px",
                            "border-top-width": "0",
                            "border-top-style": "none",
                            "border-top-color": "transparent",
                            "border-right-width": "0",
                            "border-right-style": "none",
                            "border-right-color": "transparent",
                            "border-bottom-width": "0",
                            "border-bottom-style": "none",
                            "border-bottom-color": "transparent",
                            "border-left-width": "0",
                            "border-left-style": "none",
                            "border-left-color": "transparent",
                            "outline": "none",
                            "background-color": "transparent",
                            "font-size": "15px",
                            "color": "#0F1115"
                          }
                        },
                        "text": "you@company.com"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "height": "44px",
                            "padding-top": "0",
                            "padding-right": "16px",
                            "padding-bottom": "0",
                            "padding-left": "16px",
                            "border-top-width": "0",
                            "border-top-style": "none",
                            "border-top-color": "transparent",
                            "border-right-width": "0",
                            "border-right-style": "none",
                            "border-right-color": "transparent",
                            "border-bottom-width": "0",
                            "border-bottom-style": "none",
                            "border-bottom-color": "transparent",
                            "border-left-width": "0",
                            "border-left-style": "none",
                            "border-left-color": "transparent",
                            "border-top-left-radius": "8px",
                            "border-top-right-radius": "8px",
                            "border-bottom-right-radius": "8px",
                            "border-bottom-left-radius": "8px",
                            "cursor": "pointer",
                            "font-weight": "500",
                            "background-color": "#0F1115",
                            "color": "#FFFFFF",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "text": "Subscribe"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "min-height": "18px",
                        "font-size": "13px",
                        "color": "#B4521A"
                      }
                    },
                    "attrs": {
                      "role": "status"
                    }
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-26",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "40px",
                    "column-gap": "64px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-width": "120px"
                      }
                    },
                    "attrs": {
                      "aria-label": "Product"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#7A808A"
                          }
                        },
                        "text": "Product"
                      },
                      {
                        "tag": "a",
                        "key": "a-10",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Scheduling"
                      },
                      {
                        "tag": "a",
                        "key": "a-11",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Dispatch"
                      },
                      {
                        "tag": "a",
                        "key": "a-12",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Invoicing"
                      },
                      {
                        "tag": "a",
                        "key": "a-13",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Pricing"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-width": "120px"
                      }
                    },
                    "attrs": {
                      "aria-label": "Learn"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#7A808A"
                          }
                        },
                        "text": "Learn"
                      },
                      {
                        "tag": "a",
                        "key": "a-16",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Help center"
                      },
                      {
                        "tag": "a",
                        "key": "a-17",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Templates"
                      },
                      {
                        "tag": "a",
                        "key": "a-18",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Changelog"
                      },
                      {
                        "tag": "a",
                        "key": "a-19",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "API"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "min-width": "120px"
                      }
                    },
                    "attrs": {
                      "aria-label": "Company"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#7A808A"
                          }
                        },
                        "text": "Company"
                      },
                      {
                        "tag": "a",
                        "key": "a-22",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "About"
                      },
                      {
                        "tag": "a",
                        "key": "a-23",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Careers"
                      },
                      {
                        "tag": "a",
                        "key": "a-24",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "padding-top": "2px",
                            "padding-right": "0",
                            "padding-bottom": "2px",
                            "padding-left": "0",
                            "color": "#4E545D",
                            "text-decoration": "none"
                          }
                        },
                        "href": "#",
                        "text": "Contact"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-33",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "row-gap": "12px",
                "column-gap": "12px",
                "font-size": "14px",
                "color": "#5B616B"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-28",
                "text": "© 2026 Harborline, Inc. [Replace with your company.]"
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "display": "flex",
                    "row-gap": "18px",
                    "column-gap": "18px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-29",
                    "style": {
                      "base": {
                        "color": "#4E545D",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Privacy"
                  },
                  {
                    "tag": "a",
                    "key": "a-30",
                    "style": {
                      "base": {
                        "color": "#4E545D",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Terms"
                  },
                  {
                    "tag": "a",
                    "key": "a-31",
                    "style": {
                      "base": {
                        "color": "#4E545D",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Status"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-34",
            "style": {
              "base": {
                "font-size": "clamp(64px, 15vw, 210px)",
                "line-height": "0.78",
                "letter-spacing": "-0.065em",
                "font-weight": "700",
                "color": "#0F1115",
                "white-space": "nowrap",
                "margin-bottom": "-0.08em"
              }
            },
            "attrs": {
              "aria-hidden": "true"
            },
            "text": "Harborline"
          }
        ]
      }
    ]
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
