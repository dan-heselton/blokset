import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "bento-22",
  "prefix": "bento22",
  "name": "Bento / Dark controls",
  "category": "bento",
  "collection": "saas",
  "description": "Bento / Dark controls for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Small controls, big hours back"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-67"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#F4F5F1",
        "background-color": "#0F1115",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-68",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
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
                "max-width": "680px"
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
                    "color": "#A7ADB6"
                  }
                },
                "text": "Under the hood"
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
            "key": "div-67",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "14px",
                "column-gap": "14px"
              },
              "md": {
                "grid-template-columns": "repeat(2, minmax(0, 1fr))"
              },
              "lg": {
                "grid-template-columns": "repeat(4, minmax(0, 1fr))"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-21",
                "style": {
                  "base": {
                    "grid-column-start": "span 2",
                    "min-height": "300px",
                    "padding-top": "24px",
                    "padding-right": "24px",
                    "padding-bottom": "24px",
                    "padding-left": "24px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#181B20",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "16px",
                    "column-gap": "16px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Live crew map"
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "display": "flex",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "attrs": {
                          "role": "group",
                          "aria-label": "Show crews",
                          "data-blok-choices": "",
                          "data-blok-multi": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "6px",
                                "column-gap": "6px",
                                "height": "36px",
                                "padding-top": "0",
                                "padding-right": "12px",
                                "padding-bottom": "0",
                                "padding-left": "12px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "13px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#3A3F47",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#3A3F47",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#3A3F47",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#3A3F47",
                                "background-color": "#262A31",
                                "color": "#F4F5F1"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "true",
                              "data-blok-choice": ""
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-5",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#AFC0FF"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-6",
                                "text": "Crew A"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-10",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "6px",
                                "column-gap": "6px",
                                "height": "36px",
                                "padding-top": "0",
                                "padding-right": "12px",
                                "padding-bottom": "0",
                                "padding-left": "12px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "13px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#3A3F47",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#3A3F47",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#3A3F47",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#3A3F47",
                                "background-color": "#262A31",
                                "color": "#F4F5F1"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "true",
                              "data-blok-choice": ""
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-8",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#8FD3A8"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-9",
                                "text": "Crew B"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "6px",
                                "column-gap": "6px",
                                "height": "36px",
                                "padding-top": "0",
                                "padding-right": "12px",
                                "padding-bottom": "0",
                                "padding-left": "12px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "13px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#2C3037",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#2C3037",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#2C3037",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#2C3037",
                                "background-color": "transparent",
                                "color": "#F4F5F1"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "false",
                              "data-blok-choice": ""
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-11",
                                "style": {
                                  "base": {
                                    "width": "8px",
                                    "height": "8px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#F2B48A"
                                  }
                                },
                                "attrs": {
                                  "aria-hidden": "true"
                                }
                              },
                              {
                                "tag": "div",
                                "key": "text-12",
                                "text": "Crew C"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "position": "relative",
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-height": "200px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "background-color": "#20242A",
                        "background-image": "linear-gradient(#262A31 1px, transparent 1px), linear-gradient(90deg, #262A31 1px, transparent 1px)",
                        "background-size": "40px 40px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "left": "18%",
                            "top": "30%",
                            "width": "14px",
                            "height": "14px",
                            "margin-top": "-7px",
                            "margin-right": "-7px",
                            "margin-bottom": "-7px",
                            "margin-left": "-7px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#0F1115",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#0F1115",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#0F1115",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#0F1115",
                            "background-color": "#AFC0FF",
                            "box-shadow": "0 0 0 6px #AFC0FF33"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "left": "34%",
                            "top": "62%",
                            "width": "14px",
                            "height": "14px",
                            "margin-top": "-7px",
                            "margin-right": "-7px",
                            "margin-bottom": "-7px",
                            "margin-left": "-7px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#0F1115",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#0F1115",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#0F1115",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#0F1115",
                            "background-color": "#AFC0FF",
                            "box-shadow": "0 0 0 6px #AFC0FF33"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "left": "52%",
                            "top": "24%",
                            "width": "14px",
                            "height": "14px",
                            "margin-top": "-7px",
                            "margin-right": "-7px",
                            "margin-bottom": "-7px",
                            "margin-left": "-7px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#0F1115",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#0F1115",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#0F1115",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#0F1115",
                            "background-color": "#8FD3A8",
                            "box-shadow": "0 0 0 6px #8FD3A833"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "position": "absolute",
                            "left": "70%",
                            "top": "58%",
                            "width": "14px",
                            "height": "14px",
                            "margin-top": "-7px",
                            "margin-right": "-7px",
                            "margin-bottom": "-7px",
                            "margin-left": "-7px",
                            "border-top-left-radius": "50%",
                            "border-top-right-radius": "50%",
                            "border-bottom-right-radius": "50%",
                            "border-bottom-left-radius": "50%",
                            "border-top-width": "2px",
                            "border-top-style": "solid",
                            "border-top-color": "#0F1115",
                            "border-right-width": "2px",
                            "border-right-style": "solid",
                            "border-right-color": "#0F1115",
                            "border-bottom-width": "2px",
                            "border-bottom-style": "solid",
                            "border-bottom-color": "#0F1115",
                            "border-left-width": "2px",
                            "border-left-style": "solid",
                            "border-left-color": "#0F1115",
                            "background-color": "#8FD3A8",
                            "box-shadow": "0 0 0 6px #8FD3A833"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-37",
                "style": {
                  "base": {
                    "padding-top": "24px",
                    "padding-right": "24px",
                    "padding-bottom": "24px",
                    "padding-left": "24px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#181B20",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "16px",
                    "column-gap": "16px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "font-size": "18px",
                        "font-weight": "600"
                      }
                    },
                    "text": "Invoice #1042"
                  },
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "list-style": "none",
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "padding-top": "0",
                        "padding-right": "0",
                        "padding-bottom": "0",
                        "padding-left": "0",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px",
                            "color": "#F4F5F1"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "width": "22px",
                                "height": "22px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "background-color": "#8FD3A8",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-24",
                            "text": "Created"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px",
                            "color": "#F4F5F1"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "width": "22px",
                                "height": "22px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "background-color": "#8FD3A8",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "text": "✓"
                          },
                          {
                            "tag": "div",
                            "key": "text-27",
                            "text": "Sent by text"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-31",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px",
                            "color": "#7D838C"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "width": "22px",
                                "height": "22px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "background-color": "#3A3F47",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            }
                          },
                          {
                            "tag": "div",
                            "key": "text-30",
                            "text": "Viewed"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "display": "flex",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px",
                            "color": "#7D838C"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "width": "22px",
                                "height": "22px",
                                "border-top-left-radius": "50%",
                                "border-top-right-radius": "50%",
                                "border-bottom-right-radius": "50%",
                                "border-bottom-left-radius": "50%",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                "font-size": "12px",
                                "background-color": "#3A3F47",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            }
                          },
                          {
                            "tag": "div",
                            "key": "text-33",
                            "text": "Paid"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-36",
                    "style": {
                      "base": {
                        "margin-top": "auto",
                        "height": "44px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
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
                        "cursor": "pointer",
                        "font-weight": "500",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "text": "Next: Viewed"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-46",
                "style": {
                  "base": {
                    "padding-top": "24px",
                    "padding-right": "24px",
                    "padding-bottom": "24px",
                    "padding-left": "24px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#181B20",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#2C3037",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#2C3037",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#2C3037",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#2C3037",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "16px",
                    "column-gap": "16px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-38",
                    "style": {
                      "base": {
                        "font-size": "18px",
                        "font-weight": "600"
                      }
                    },
                    "text": "How customers hear from you"
                  },
                  {
                    "tag": "div",
                    "key": "div-42",
                    "style": {
                      "base": {
                        "display": "flex",
                        "padding-top": "4px",
                        "padding-right": "4px",
                        "padding-bottom": "4px",
                        "padding-left": "4px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "radiogroup",
                      "aria-label": "Channel",
                      "data-blok-choices": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "height": "38px",
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
                            "font-size": "14px",
                            "background-color": "#F4F5F1",
                            "color": "#0F1115",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "role": "radio",
                          "aria-checked": "true",
                          "data-blok-choice": ""
                        },
                        "text": "Text"
                      },
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "height": "38px",
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
                            "font-size": "14px",
                            "background-color": "transparent",
                            "color": "#B9BEC6",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "role": "radio",
                          "aria-checked": "false",
                          "data-blok-choice": ""
                        },
                        "text": "Email"
                      },
                      {
                        "tag": "div",
                        "key": "div-41",
                        "style": {
                          "base": {
                            "flex-grow": "1",
                            "flex-shrink": "1",
                            "flex-basis": "0%",
                            "height": "38px",
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
                            "font-size": "14px",
                            "background-color": "transparent",
                            "color": "#B9BEC6",
                            "display": "flex",
                            "align-items": "center",
                            "justify-content": "center"
                          }
                        },
                        "attrs": {
                          "role": "radio",
                          "aria-checked": "false",
                          "data-blok-choice": ""
                        },
                        "text": "Both"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-45",
                    "style": {
                      "base": {
                        "padding-top": "14px",
                        "padding-right": "14px",
                        "padding-bottom": "14px",
                        "padding-left": "14px",
                        "border-top-left-radius": "12px",
                        "border-top-right-radius": "12px",
                        "border-bottom-right-radius": "12px",
                        "border-bottom-left-radius": "12px",
                        "background-color": "#20242A",
                        "font-size": "14px",
                        "line-height": "1.5",
                        "color": "#C9CDD4",
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "align-items": "baseline",
                        "column-gap": "0.35rem"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "11px",
                            "letter-spacing": "0.08em",
                            "text-transform": "uppercase",
                            "color": "#8C929B",
                            "margin-bottom": "6px"
                          }
                        },
                        "text": "Text message"
                      },
                      {
                        "tag": "div",
                        "key": "text-44",
                        "text": "Hi Dana, Crew A arrives tomorrow 9–10am for your bin wash. Reply C to confirm."
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-66",
                "style": {
                  "base": {
                    "grid-column-start": "span 2",
                    "padding-top": "24px",
                    "padding-right": "24px",
                    "padding-bottom": "24px",
                    "padding-left": "24px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#2D4BF0",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "row-gap": "20px",
                    "column-gap": "20px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-49",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "220px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Pick a day"
                      },
                      {
                        "tag": "div",
                        "key": "div-48",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#DCE2FF"
                          }
                        },
                        "text": "22 jobs booked on Tue · [N] open slots"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-65",
                    "style": {
                      "base": {
                        "display": "flex",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-52",
                        "style": {
                          "base": {
                            "width": "52px",
                            "height": "64px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
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
                            "cursor": "pointer",
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "center",
                            "justify-content": "center",
                            "row-gap": "2px",
                            "column-gap": "2px",
                            "background-color": "rgba(255,255,255,0.14)",
                            "color": "#FFFFFF",
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
                            "key": "div-50",
                            "style": {
                              "base": {
                                "font-size": "12px"
                              }
                            },
                            "text": "Mon"
                          },
                          {
                            "tag": "div",
                            "key": "div-51",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "font-weight": "600"
                              }
                            },
                            "text": "13"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-55",
                        "style": {
                          "base": {
                            "width": "52px",
                            "height": "64px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
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
                            "cursor": "pointer",
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "center",
                            "justify-content": "center",
                            "row-gap": "2px",
                            "column-gap": "2px",
                            "background-color": "#FFFFFF",
                            "color": "#0F1115",
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
                            "key": "div-53",
                            "style": {
                              "base": {
                                "font-size": "12px"
                              }
                            },
                            "text": "Tue"
                          },
                          {
                            "tag": "div",
                            "key": "div-54",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "font-weight": "600"
                              }
                            },
                            "text": "14"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-58",
                        "style": {
                          "base": {
                            "width": "52px",
                            "height": "64px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
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
                            "cursor": "pointer",
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "center",
                            "justify-content": "center",
                            "row-gap": "2px",
                            "column-gap": "2px",
                            "background-color": "rgba(255,255,255,0.14)",
                            "color": "#FFFFFF",
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
                            "key": "div-56",
                            "style": {
                              "base": {
                                "font-size": "12px"
                              }
                            },
                            "text": "Wed"
                          },
                          {
                            "tag": "div",
                            "key": "div-57",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "font-weight": "600"
                              }
                            },
                            "text": "15"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-61",
                        "style": {
                          "base": {
                            "width": "52px",
                            "height": "64px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
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
                            "cursor": "pointer",
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "center",
                            "justify-content": "center",
                            "row-gap": "2px",
                            "column-gap": "2px",
                            "background-color": "rgba(255,255,255,0.14)",
                            "color": "#FFFFFF",
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
                            "key": "div-59",
                            "style": {
                              "base": {
                                "font-size": "12px"
                              }
                            },
                            "text": "Thu"
                          },
                          {
                            "tag": "div",
                            "key": "div-60",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "font-weight": "600"
                              }
                            },
                            "text": "16"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-64",
                        "style": {
                          "base": {
                            "width": "52px",
                            "height": "64px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
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
                            "cursor": "pointer",
                            "display": "flex",
                            "flex-direction": "column",
                            "align-items": "center",
                            "justify-content": "center",
                            "row-gap": "2px",
                            "column-gap": "2px",
                            "background-color": "rgba(255,255,255,0.14)",
                            "color": "#FFFFFF",
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
                            "key": "div-62",
                            "style": {
                              "base": {
                                "font-size": "12px"
                              }
                            },
                            "text": "Fri"
                          },
                          {
                            "tag": "div",
                            "key": "div-63",
                            "style": {
                              "base": {
                                "font-size": "18px",
                                "font-weight": "600"
                              }
                            },
                            "text": "17"
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
    default: "dark",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
