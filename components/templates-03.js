import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "templates-03",
  "prefix": "templates03",
  "name": "Templates / Customizer",
  "category": "templates",
  "collection": "saas",
  "description": "Templates / Customizer for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Make it yours before you sign up"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-50"
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
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-51",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "28px",
            "column-gap": "28px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "14px",
                "column-gap": "14px",
                "max-width": "640px"
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
                "text": "Templates"
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
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-50",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "16px",
                "column-gap": "16px",
                "align-items": "stretch"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-16",
                "style": {
                  "base": {
                    "flex-grow": "0",
                    "flex-shrink": "1",
                    "flex-basis": "240px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "4px",
                    "column-gap": "4px"
                  }
                },
                "attrs": {
                  "aria-label": "Templates"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
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
                      "aria-current": "page"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Service invoice"
                      },
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Invoice"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
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
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Day-before reminder"
                      },
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Message"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
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
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Job checklist"
                      },
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Checklist"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
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
                      "aria-current": "false"
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Quote"
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Quote"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "280px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "18px",
                    "column-gap": "18px",
                    "padding-top": "22px",
                    "padding-right": "22px",
                    "padding-bottom": "22px",
                    "padding-left": "22px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#F4F5F1"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "8px",
                        "column-gap": "8px",
                        "font-size": "14px",
                        "color": "#4E545D"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "text-18",
                        "text": "Business name"
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "height": "48px",
                            "padding-top": "0",
                            "padding-right": "12px",
                            "padding-bottom": "0",
                            "padding-left": "12px",
                            "border-top-left-radius": "10px",
                            "border-top-right-radius": "10px",
                            "border-bottom-right-radius": "10px",
                            "border-bottom-left-radius": "10px",
                            "border-top-width": "1px",
                            "border-top-style": "solid",
                            "border-top-color": "#CFD3CA",
                            "border-right-width": "1px",
                            "border-right-style": "solid",
                            "border-right-color": "#CFD3CA",
                            "border-bottom-width": "1px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#CFD3CA",
                            "border-left-width": "1px",
                            "border-left-style": "solid",
                            "border-left-color": "#CFD3CA",
                            "background-color": "#FFFFFF",
                            "font-size": "16px",
                            "color": "#0F1115"
                          }
                        },
                        "text": "Your business"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
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
                        "key": "div-20",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "Brand color"
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "8px",
                            "column-gap": "8px"
                          }
                        },
                        "attrs": {
                          "role": "radiogroup",
                          "aria-label": "Brand color",
                          "data-blok-choices": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-21",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "cursor": "pointer",
                                "background-color": "#2D4BF0",
                                "border-top-width": "3px",
                                "border-top-style": "solid",
                                "border-top-color": "#FFFFFF",
                                "border-right-width": "3px",
                                "border-right-style": "solid",
                                "border-right-color": "#FFFFFF",
                                "border-bottom-width": "3px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#FFFFFF",
                                "border-left-width": "3px",
                                "border-left-style": "solid",
                                "border-left-color": "#FFFFFF",
                                "box-shadow": "0 0 0 2px #2D4BF0",
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
                              "role": "radio",
                              "aria-checked": "true",
                              "aria-label": "Harbor blue",
                              "data-blok-choice": ""
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "cursor": "pointer",
                                "background-color": "#1D6B3A",
                                "border-top-width": "3px",
                                "border-top-style": "solid",
                                "border-top-color": "#FFFFFF",
                                "border-right-width": "3px",
                                "border-right-style": "solid",
                                "border-right-color": "#FFFFFF",
                                "border-bottom-width": "3px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#FFFFFF",
                                "border-left-width": "3px",
                                "border-left-style": "solid",
                                "border-left-color": "#FFFFFF",
                                "box-shadow": "0 0 0 2px rgba(0,0,0,0)",
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
                              "role": "radio",
                              "aria-checked": "false",
                              "aria-label": "Pine",
                              "data-blok-choice": ""
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "cursor": "pointer",
                                "background-color": "#B4521A",
                                "border-top-width": "3px",
                                "border-top-style": "solid",
                                "border-top-color": "#FFFFFF",
                                "border-right-width": "3px",
                                "border-right-style": "solid",
                                "border-right-color": "#FFFFFF",
                                "border-bottom-width": "3px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#FFFFFF",
                                "border-left-width": "3px",
                                "border-left-style": "solid",
                                "border-left-color": "#FFFFFF",
                                "box-shadow": "0 0 0 2px rgba(0,0,0,0)",
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
                              "role": "radio",
                              "aria-checked": "false",
                              "aria-label": "Rust",
                              "data-blok-choice": ""
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "cursor": "pointer",
                                "background-color": "#6B32A8",
                                "border-top-width": "3px",
                                "border-top-style": "solid",
                                "border-top-color": "#FFFFFF",
                                "border-right-width": "3px",
                                "border-right-style": "solid",
                                "border-right-color": "#FFFFFF",
                                "border-bottom-width": "3px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#FFFFFF",
                                "border-left-width": "3px",
                                "border-left-style": "solid",
                                "border-left-color": "#FFFFFF",
                                "box-shadow": "0 0 0 2px rgba(0,0,0,0)",
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
                              "role": "radio",
                              "aria-checked": "false",
                              "aria-label": "Plum",
                              "data-blok-choice": ""
                            }
                          },
                          {
                            "tag": "div",
                            "key": "div-25",
                            "style": {
                              "base": {
                                "width": "44px",
                                "height": "44px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "cursor": "pointer",
                                "background-color": "#0F1115",
                                "border-top-width": "3px",
                                "border-top-style": "solid",
                                "border-top-color": "#FFFFFF",
                                "border-right-width": "3px",
                                "border-right-style": "solid",
                                "border-right-color": "#FFFFFF",
                                "border-bottom-width": "3px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#FFFFFF",
                                "border-left-width": "3px",
                                "border-left-style": "solid",
                                "border-left-color": "#FFFFFF",
                                "box-shadow": "0 0 0 2px rgba(0,0,0,0)",
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
                              "role": "radio",
                              "aria-checked": "false",
                              "aria-label": "Ink",
                              "data-blok-choice": ""
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "10px",
                        "column-gap": "10px",
                        "font-size": "15px",
                        "cursor": "pointer"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "width": "20px",
                            "height": "20px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "text-29",
                        "text": "Show logo mark"
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-31",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Use this template"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-49",
                "style": {
                  "base": {
                    "flex-grow": "2",
                    "flex-shrink": "1",
                    "flex-basis": "380px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#ECEEE8"
                  }
                },
                "attrs": {
                  "aria-label": "Preview"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-48",
                    "style": {
                      "base": {
                        "width": "100%",
                        "max-width": "420px",
                        "border-top-left-radius": "16px",
                        "border-top-right-radius": "16px",
                        "border-bottom-right-radius": "16px",
                        "border-bottom-left-radius": "16px",
                        "background-color": "#FFFFFF",
                        "overflow": "hidden",
                        "box-shadow": "0 24px 50px -30px rgba(15,17,21,0.5)"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "10px",
                            "column-gap": "10px",
                            "padding-top": "16px",
                            "padding-right": "18px",
                            "padding-bottom": "16px",
                            "padding-left": "18px",
                            "background-color": "#2D4BF0",
                            "color": "#FFFFFF"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-33",
                            "style": {
                              "base": {
                                "width": "28px",
                                "height": "28px",
                                "border-top-left-radius": "8px",
                                "border-top-right-radius": "8px",
                                "border-bottom-right-radius": "8px",
                                "border-bottom-left-radius": "8px",
                                "background-color": "rgba(255,255,255,0.25)",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-weight": "600"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "Y"
                          },
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "600"
                              }
                            },
                            "text": "Your business"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "padding-top": "20px",
                            "padding-right": "20px",
                            "padding-bottom": "20px",
                            "padding-left": "20px",
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "font-size": "20px",
                                "font-weight": "600",
                                "letter-spacing": "-0.02em"
                              }
                            },
                            "text": "Invoice #1042"
                          },
                          {
                            "tag": "div",
                            "key": "div-39",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "10px",
                                "padding-right": "0",
                                "padding-bottom": "10px",
                                "padding-left": "0",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#ECEEE8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-37",
                                "text": "Bin wash × 3"
                              },
                              {
                                "tag": "div",
                                "key": "div-38",
                                "style": {
                                  "base": {
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "$[—]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "10px",
                                "padding-right": "0",
                                "padding-bottom": "10px",
                                "padding-left": "0",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#ECEEE8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-40",
                                "text": "Deodorize"
                              },
                              {
                                "tag": "div",
                                "key": "div-41",
                                "style": {
                                  "base": {
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "$[—]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-45",
                            "style": {
                              "base": {
                                "display": "flex",
                                "justify-content": "space-between",
                                "row-gap": "12px",
                                "column-gap": "12px",
                                "padding-top": "10px",
                                "padding-right": "0",
                                "padding-bottom": "10px",
                                "padding-left": "0",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#ECEEE8",
                                "font-size": "14px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-43",
                                "text": "Total"
                              },
                              {
                                "tag": "div",
                                "key": "div-44",
                                "style": {
                                  "base": {
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "$[—]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-46",
                            "style": {
                              "base": {
                                "align-self": "flex-start",
                                "margin-top": "4px",
                                "height": "42px",
                                "padding-top": "0",
                                "padding-right": "16px",
                                "padding-bottom": "0",
                                "padding-left": "16px",
                                "border-top-left-radius": "10px",
                                "border-top-right-radius": "10px",
                                "border-bottom-right-radius": "10px",
                                "border-bottom-left-radius": "10px",
                                "display": "flex",
                                "align-items": "center",
                                "font-size": "14px",
                                "font-weight": "500",
                                "background-color": "#2D4BF0",
                                "color": "#FFFFFF"
                              }
                            },
                            "text": "Pay now"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
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
