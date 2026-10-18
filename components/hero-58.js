import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "hero-58",
  "prefix": "hero58",
  "name": "Hero / Phone step through",
  "category": "hero",
  "collection": "saas",
  "description": "Hero / Phone step through for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "The whole job, in one pocket"
    },
    "subheading": {
      "type": "text",
      "default": "Crews see where to go, what to do and how to get paid. The office sees it happen."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-24",
        "div-56"
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
        "padding-top": "clamp(56px, 8vw, 104px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 104px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-57",
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
            "row-gap": "clamp(40px, 6vw, 88px)",
            "column-gap": "clamp(40px, 6vw, 88px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-24",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "440px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "24px",
                "column-gap": "24px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-1",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "letter-spacing": "0.08em",
                    "text-transform": "uppercase",
                    "color": "#5B616B"
                  }
                },
                "text": "Crew app"
              },
              {
                "tag": "h1",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(42px, 5.6vw, 76px)",
                    "line-height": "0.98",
                    "letter-spacing": "-0.045em",
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
                    "max-width": "480px",
                    "font-size": "19px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              },
              {
                "tag": "div",
                "key": "div-20",
                "style": {
                  "base": {
                    "list-style": "none",
                    "margin-top": "8px",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "padding-top": "0",
                    "padding-right": "0",
                    "padding-bottom": "0",
                    "padding-left": "0",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "4px",
                    "column-gap": "4px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-7",
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
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
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "#F4F5F1",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-current": "step",
                          "data-blok-panel-go": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-4",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "width": "26px",
                                "height": "26px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "background-color": "#2D4BF0",
                                "color": "#FFFFFF"
                              }
                            },
                            "text": "1"
                          },
                          {
                            "tag": "div",
                            "key": "div-5",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "600"
                              }
                            },
                            "text": "See today’s route"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
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
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "transparent",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-current": "false",
                          "data-blok-panel-go": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-8",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "width": "26px",
                                "height": "26px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "background-color": "#ECEEE8",
                                "color": "#4E545D"
                              }
                            },
                            "text": "2"
                          },
                          {
                            "tag": "div",
                            "key": "div-9",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "400"
                              }
                            },
                            "text": "Follow the checklist"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
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
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "transparent",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-current": "false",
                          "data-blok-panel-go": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-12",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "width": "26px",
                                "height": "26px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "background-color": "#ECEEE8",
                                "color": "#4E545D"
                              }
                            },
                            "text": "3"
                          },
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "400"
                              }
                            },
                            "text": "Get paid on site"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-19",
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "width": "100%",
                            "min-height": "52px",
                            "padding-top": "0",
                            "padding-right": "14px",
                            "padding-bottom": "0",
                            "padding-left": "14px",
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
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "cursor": "pointer",
                            "text-align": "left",
                            "background-color": "transparent",
                            "color": "#0F1115"
                          }
                        },
                        "attrs": {
                          "aria-current": "false",
                          "data-blok-panel-go": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "13px",
                                "width": "26px",
                                "height": "26px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "background-color": "#ECEEE8",
                                "color": "#4E545D"
                              }
                            },
                            "text": "4"
                          },
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "font-size": "17px",
                                "font-weight": "400"
                              }
                            },
                            "text": "Head to the next stop"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-23",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "row-gap": "12px",
                    "column-gap": "12px",
                    "margin-top": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "a",
                    "key": "a-21",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Start free trial"
                  },
                  {
                    "tag": "a",
                    "key": "a-22",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "22px",
                        "padding-bottom": "0",
                        "padding-left": "22px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
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
                        "color": "#0F1115",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Get the app"
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-56",
            "style": {
              "base": {
                "flex-grow": "0",
                "flex-shrink": "1",
                "flex-basis": "380px",
                "margin-top": "0",
                "margin-right": "auto",
                "margin-bottom": "0",
                "margin-left": "auto",
                "display": "flex",
                "flex-direction": "column",
                "align-items": "center",
                "row-gap": "18px",
                "column-gap": "18px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-51",
                "style": {
                  "base": {
                    "width": "320px",
                    "max-width": "100%",
                    "height": "580px",
                    "border-top-left-radius": "44px",
                    "border-top-right-radius": "44px",
                    "border-bottom-right-radius": "44px",
                    "border-bottom-left-radius": "44px",
                    "padding-top": "12px",
                    "padding-right": "12px",
                    "padding-bottom": "12px",
                    "padding-left": "12px",
                    "background-color": "#0F1115",
                    "box-shadow": "0 30px 60px -30px rgba(15,17,21,0.5)"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "stack-217",
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
                        "key": "div-50",
                        "style": {
                          "base": {
                            "height": "100%",
                            "border-top-left-radius": "34px",
                            "border-top-right-radius": "34px",
                            "border-bottom-right-radius": "34px",
                            "border-bottom-left-radius": "34px",
                            "background-color": "#F4F5F1",
                            "overflow": "hidden",
                            "display": "flex",
                            "flex-direction": "column"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "padding-top": "18px",
                                "padding-right": "22px",
                                "padding-bottom": "10px",
                                "padding-left": "22px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-25",
                                "text": "8:12"
                              },
                              {
                                "tag": "div",
                                "key": "div-26",
                                "text": "Today"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "padding-top": "6px",
                                "padding-right": "20px",
                                "padding-bottom": "16px",
                                "padding-left": "20px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "6px",
                                "column-gap": "6px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "font-size": "24px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.03em"
                                  }
                                },
                                "text": "6 stops"
                              },
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Shortest order, 2h 40m driving"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-47",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-34",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-31",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#2D4BF0"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-32",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "14 Alder Ct"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-33",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "8:30"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-38",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-35",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#2D4BF0"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-36",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "220 Bay St"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-37",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "9:15"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-42",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-39",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#C9CDD4"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-40",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "9 Pine Row"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-41",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "10:00"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-46",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-43",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#C9CDD4"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-44",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "61 Mill Rd"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-45",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "10:45"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-49",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "height": "52px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#2D4BF0",
                                    "color": "#FFFFFF",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Start route"
                              }
                            ]
                          }
                        ],
                        "attrs": {
                          "data-blok-panel": "",
                          "data-display": "flex"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-107",
                        "style": {
                          "base": {
                            "height": "100%",
                            "border-top-left-radius": "34px",
                            "border-top-right-radius": "34px",
                            "border-bottom-right-radius": "34px",
                            "border-bottom-left-radius": "34px",
                            "background-color": "#F4F5F1",
                            "overflow": "hidden",
                            "display": "none",
                            "flex-direction": "column"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-84",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "padding-top": "18px",
                                "padding-right": "22px",
                                "padding-bottom": "10px",
                                "padding-left": "22px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-82",
                                "text": "8:12"
                              },
                              {
                                "tag": "div",
                                "key": "div-83",
                                "text": "Job 2 of 6"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-87",
                            "style": {
                              "base": {
                                "padding-top": "6px",
                                "padding-right": "20px",
                                "padding-bottom": "16px",
                                "padding-left": "20px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "6px",
                                "column-gap": "6px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-85",
                                "style": {
                                  "base": {
                                    "font-size": "24px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.03em"
                                  }
                                },
                                "text": "220 Bay St"
                              },
                              {
                                "tag": "div",
                                "key": "div-86",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Bin wash, 3 bins"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-104",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-91",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-88",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#1D6B3A"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-89",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Before photo"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-90",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "Done"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-95",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-92",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#1D6B3A"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-93",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Wash and sanitize"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-94",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "Done"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-99",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-96",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#C9CDD4"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-97",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "After photo"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-98",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-103",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-100",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#C9CDD4"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-101",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Return bins"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-102",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-106",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-105",
                                "style": {
                                  "base": {
                                    "height": "52px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#2D4BF0",
                                    "color": "#FFFFFF",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Mark complete"
                              }
                            ]
                          }
                        ],
                        "attrs": {
                          "data-blok-panel": "",
                          "data-display": "flex"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-160",
                        "style": {
                          "base": {
                            "height": "100%",
                            "border-top-left-radius": "34px",
                            "border-top-right-radius": "34px",
                            "border-bottom-right-radius": "34px",
                            "border-bottom-left-radius": "34px",
                            "background-color": "#F4F5F1",
                            "overflow": "hidden",
                            "display": "none",
                            "flex-direction": "column"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-141",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "padding-top": "18px",
                                "padding-right": "22px",
                                "padding-bottom": "10px",
                                "padding-left": "22px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-139",
                                "text": "8:12"
                              },
                              {
                                "tag": "div",
                                "key": "div-140",
                                "text": "Invoice"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-144",
                            "style": {
                              "base": {
                                "padding-top": "6px",
                                "padding-right": "20px",
                                "padding-bottom": "16px",
                                "padding-left": "20px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "6px",
                                "column-gap": "6px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-142",
                                "style": {
                                  "base": {
                                    "font-size": "24px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.03em"
                                  }
                                },
                                "text": "$[AMOUNT]"
                              },
                              {
                                "tag": "div",
                                "key": "div-143",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Sent to customer by text"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-157",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-148",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-145",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#2D4BF0"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-146",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Bin wash × 3"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-147",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "$[—]"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-152",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-149",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#2D4BF0"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-150",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Deodorize"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-151",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "$[—]"
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-156",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-153",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#9A4A12"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-154",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Tip"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-155",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "Optional"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-159",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-158",
                                "style": {
                                  "base": {
                                    "height": "52px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#2D4BF0",
                                    "color": "#FFFFFF",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Take payment"
                              }
                            ]
                          }
                        ],
                        "attrs": {
                          "data-blok-panel": "",
                          "data-display": "flex"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-209",
                        "style": {
                          "base": {
                            "height": "100%",
                            "border-top-left-radius": "34px",
                            "border-top-right-radius": "34px",
                            "border-bottom-right-radius": "34px",
                            "border-bottom-left-radius": "34px",
                            "background-color": "#F4F5F1",
                            "overflow": "hidden",
                            "display": "none",
                            "flex-direction": "column"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-194",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "padding-top": "18px",
                                "padding-right": "22px",
                                "padding-bottom": "10px",
                                "padding-left": "22px",
                                "font-family": "token(font-saas-mono)",
                                "font-size": "12px",
                                "color": "#5B616B"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-192",
                                "text": "8:12"
                              },
                              {
                                "tag": "div",
                                "key": "div-193",
                                "text": "Next"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-197",
                            "style": {
                              "base": {
                                "padding-top": "6px",
                                "padding-right": "20px",
                                "padding-bottom": "16px",
                                "padding-left": "20px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "6px",
                                "column-gap": "6px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-195",
                                "style": {
                                  "base": {
                                    "font-size": "24px",
                                    "font-weight": "600",
                                    "letter-spacing": "-0.03em"
                                  }
                                },
                                "text": "9 Pine Row"
                              },
                              {
                                "tag": "div",
                                "key": "div-196",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Customer notified: arriving in 12 min"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-206",
                            "style": {
                              "base": {
                                "flex-grow": "1",
                                "flex-shrink": "1",
                                "flex-basis": "0%",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "8px",
                                "column-gap": "8px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-201",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-198",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#1D6B3A"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-199",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Gate code saved"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-200",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "tag": "div",
                                "key": "div-205",
                                "style": {
                                  "base": {
                                    "display": "flex",
                                    "align-items": "center",
                                    "row-gap": "12px",
                                    "column-gap": "12px",
                                    "padding-top": "14px",
                                    "padding-right": "14px",
                                    "padding-bottom": "14px",
                                    "padding-left": "14px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#FFFFFF",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE"
                                  }
                                },
                                "children": [
                                  {
                                    "tag": "div",
                                    "key": "div-202",
                                    "style": {
                                      "base": {
                                        "width": "10px",
                                        "height": "10px",
                                        "border-top-left-radius": "50%",
                                        "border-top-right-radius": "50%",
                                        "border-bottom-right-radius": "50%",
                                        "border-bottom-left-radius": "50%",
                                        "background-color": "#2D4BF0"
                                      }
                                    },
                                    "attrs": {
                                      "aria-hidden": "true"
                                    }
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-203",
                                    "style": {
                                      "base": {
                                        "flex-grow": "1",
                                        "flex-shrink": "1",
                                        "flex-basis": "0%",
                                        "font-size": "15px"
                                      }
                                    },
                                    "text": "Dog on property"
                                  },
                                  {
                                    "tag": "div",
                                    "key": "div-204",
                                    "style": {
                                      "base": {
                                        "font-family": "token(font-saas-mono)",
                                        "font-size": "12px",
                                        "color": "#5B616B"
                                      }
                                    },
                                    "text": "Note"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-208",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-207",
                                "style": {
                                  "base": {
                                    "height": "52px",
                                    "border-top-left-radius": "14px",
                                    "border-top-right-radius": "14px",
                                    "border-bottom-right-radius": "14px",
                                    "border-bottom-left-radius": "14px",
                                    "background-color": "#2D4BF0",
                                    "color": "#FFFFFF",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Open directions"
                              }
                            ]
                          }
                        ],
                        "attrs": {
                          "data-blok-panel": "",
                          "data-display": "flex"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-55",
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
                    "key": "div-52",
                    "style": {
                      "base": {
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
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
                        "background-color": "#FFFFFF",
                        "cursor": "pointer",
                        "font-size": "18px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "aria-label": "Previous step",
                      "data-blok-panel-prev": ""
                    },
                    "text": "←"
                  },
                  {
                    "tag": "div",
                    "key": "div-53",
                    "style": {
                      "base": {
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "color": "#5B616B",
                        "min-width": "48px",
                        "text-align": "center"
                      }
                    },
                    "text": "1 / 4",
                    "attrs": {
                      "data-blok-panel-count": ""
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-54",
                    "style": {
                      "base": {
                        "width": "44px",
                        "height": "44px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
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
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "cursor": "pointer",
                        "font-size": "18px",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "line-height": "1",
                        "flex-shrink": "0",
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "0px"
                      }
                    },
                    "attrs": {
                      "aria-label": "Next step",
                      "data-blok-panel-next": ""
                    },
                    "text": "→"
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
